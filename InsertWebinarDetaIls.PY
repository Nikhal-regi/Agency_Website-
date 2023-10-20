import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('WebinarDetails')

def lambda_handler(event, context):
    contact = event.get('contact')
    firstname = event.get('firstName')
    lastname = event.get('lastname')
    email = event.get('email')
    date = event.get('date')
    jstatus = event.get('jstatus')

    if not contact:
        return {
            'statusCode': 400,
            'body': json.dumps('Missing required field: contact')
        }

    response = table.put_item(
        Item={
            'contact': contact,
            'firstName': firstname,
            'lastname': lastname,
            'email': email,
            'date': date,
            'jstatus': jstatus
        })

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda, ' + firstname)
    }
