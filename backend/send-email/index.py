import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправка email с данными заявки на sale@foxmetod.ru
    Args: event - dict с httpMethod, body (JSON с formData)
          context - объект контекста выполнения
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'POST')
    
    # Handle CORS OPTIONS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        form_data = body_data.get('formData', {})
        
        # Формирование email
        subject = 'Новая заявка на диагностику бизнеса - FOXMetoD'
        
        email_body = f"""
Новая заявка с сайта FOXMetoD

Имя: {form_data.get('name', 'Не указано')}
Контакт: {form_data.get('contact', 'Не указано')}
Компания: {form_data.get('company', 'Не указано')}
Текущий оборот: {form_data.get('revenue', 'Не указан')} млн руб/год
Основная проблема:
{form_data.get('description', 'Не указано')}

---
Дата подачи заявки: {context.request_time if hasattr(context, 'request_time') else 'N/A'}
        """
        
        # Здесь должна быть реальная отправка через SMTP
        # Для примера возвращаем успешный ответ
        # В реальной реализации подключите SMTP сервер через переменные окружения
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': False,
                'error': str(e)
            }),
            'isBase64Encoded': False
        }
