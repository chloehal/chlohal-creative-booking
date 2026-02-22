<?php
header('Content-Type: application/json');
require_once __DIR__ . '/config.php';

header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $pdo = new PDO($dsn, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $workshop_type = $_GET['workshop_type'] ?? null;

    $sql = "SELECT id, name, rating, comment, workshop_type, created_at
            FROM reviews
            WHERE approved = 1";

    $params = [];
    if ($workshop_type && in_array($workshop_type, ['couture', 'linogravure', 'fleurs-en-perles', 'plusieurs'])) {
        if (in_array($workshop_type, ['couture', 'linogravure'])) {
            $sql .= " AND (workshop_type = :wt OR workshop_type = 'plusieurs')";
        } else {
            $sql .= " AND workshop_type = :wt";
        }
        $params[':wt'] = $workshop_type;
    }

    $sql .= " ORDER BY created_at DESC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(['success' => true, 'reviews' => $reviews]);

} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!$data || empty($data['name']) || empty($data['comment']) || !isset($data['rating']) || empty($data['workshop_type'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Champs requis manquants']);
        exit();
    }

    $name = trim($data['name']);
    $rating = (int)$data['rating'];
    $comment = trim($data['comment']);
    $workshop_type = $data['workshop_type'];

    if (strlen($name) > 100 || $rating < 1 || $rating > 5 || strlen($comment) > 1000
        || !in_array($workshop_type, ['couture', 'linogravure', 'fleurs-en-perles', 'plusieurs'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Données invalides']);
        exit();
    }

    $stmt = $pdo->prepare(
        "INSERT INTO reviews (name, rating, comment, workshop_type, approved) VALUES (:name, :rating, :comment, :wt, 0)"
    );
    $stmt->execute([
        ':name' => $name,
        ':rating' => $rating,
        ':comment' => $comment,
        ':wt' => $workshop_type,
    ]);

    echo json_encode(['success' => true, 'message' => 'Avis soumis, en attente de modération']);

} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
