CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    rating TINYINT NOT NULL,
    comment TEXT NOT NULL,
    workshop_type ENUM('couture', 'linogravure', 'fleurs-en-perles', 'plusieurs') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    approved BOOLEAN DEFAULT FALSE,
    INDEX idx_approved (approved),
    INDEX idx_workshop (workshop_type)
);
