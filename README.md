# todo-list-app

A simple app that uses DynamoDB and React to manage tasks. 

[Live website ](https://todo-list-dynamodb.vercel.app/)

## Project Setup

- Added IAM user with AmazonDynamoDBFullAccess policy.
- Used ```npm create vite@latest my-app -- --template react``` to create fresh React project 
- Ran ```npm install``` and ```npm run dev``` 
- Made ```.env.local``` file and added the security credentials (Access key ID & Secret access key).
- Installed SDK Packages ```npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb```
- Added code to ```App.jsx```
- Built a helper module (```dynamo.js```) to hold the AWS code
- Refactored code into components folder 
- Styled and added icons
- Ran ```npm run build```

## Day 4 features
- Update: Click the pencil icon to edit todo task
- Delete: Click the trash icon to delete todo task
- Checkbox: Check off completed todo tasks 
