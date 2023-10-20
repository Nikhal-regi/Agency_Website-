import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('NewsletterDetails')

def lambda_handler(event, context):
    email = event.get('emailInput')
    name = event.get('nameInput')
    contact = event.get('contactInput')

    response = table.put_item(
        Item={
            'emailInput': email,
            'nameInput': name,
            'contactInput': contact
        })

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda, ' + email)
    }
