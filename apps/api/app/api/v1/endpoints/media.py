from fastapi import APIRouter
router = APIRouter()
@router.get('/assets')
def get_assets():
    return {'status': 'ok'}
@router.post('/ingest')
def ingest_media():
    return {'status': 'ok'}
@router.get('/stream')
def stream_media():
    return {'status': 'ok'}
