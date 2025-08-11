from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    env: str = "development"
    aws_region: str
    s3_bucket_raw: str
    s3_bucket_output: str
    database_url: str
    redis_url: str
    secrets_prefix: str = "infrascan/"

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")


settings = Settings()



