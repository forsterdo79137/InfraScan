FROM nvidia/cuda:12.1.0-cudnn-runtime-ubuntu22.04

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
    python3-pip python3-dev build-essential git wget curl \
    libgl1 libglib2.0-0 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Python deps
COPY apps/worker/requirements.txt /app/requirements.txt
RUN pip3 install --no-cache-dir -r /app/requirements.txt

# App code
COPY apps/worker /app

# If your model file is checked into the repo, it will come via COPY above.
# Otherwise mount it at runtime or fetch from S3 on startup.

EXPOSE 8000
CMD ["python3", "-m", "uvicorn", "service:app", "--host", "0.0.0.0", "--port", "8000"]


