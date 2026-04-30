resource "aws_s3_bucket" "media_content" {
  bucket = "media-content-${var.env}"
  
  tags = {
    Name        = "Media Content Store"
    Environment = var.env
  }
}

resource "aws_s3_bucket_versioning" "media_content_versioning" {
  bucket = aws_s3_bucket.media_content.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "media_content_lifecycle" {
  bucket = aws_s3_bucket.media_content.id

  rule {
    id     = "archive-old-content"
    status = "Enabled"

    transition {
      days          = 90
      storage_class = "GLACIER"
    }

    expiration {
      days = 365
    }
  }
}
