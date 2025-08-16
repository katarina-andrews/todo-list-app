import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
    DynamoDBDocumentClient,
    ScanCommand,
    PutCommand
} from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
    }
});

const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "Todo"

export const scanTodos = async ( setTodos ) => {

    try {
        const command = new ScanCommand({ TableName: TABLE_NAME })
        const response = await docClient.send(command);
        console.log(response)
        setTodos(response.Items)
    } catch (err) {
        console.log(err.message)
    }


}

export const createTodo = async (item) => {

    const command = new PutCommand({ TableName: 'Todo', Item: item })
    const response = await docClient.send(command);
    console.log(response)

}