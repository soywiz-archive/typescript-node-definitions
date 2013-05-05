/// <reference path="node.d.ts" />

declare module "aws-sdk" {

    export var config;

    export function Config(json);

    export class Credentials {
        constructor(accessKeyId: string, secretAccessKey: string);
        constructor(accessKeyId: string, secretAccessKey: string, sessionToken: string);

        accessKeyId: string;
    }

    export interface ClientConfig {
        credentials: Credentials;
        region: string;
    }

    export class SQS {
        constructor(options?: any);
        public client: Sqs.Client;
    };
    
    export class SES {
        constructor(options?: any);
        public client: Ses.Client;
    };
    
    declare module Sqs {

        export interface Client {
            config: ClientConfig;

            sendMessage(params: any, callback: (err: any, data: SendMessageResult) => void );
            sendMessageBatch(params: any, callback: (err: any, data: SendMessageBatchResult) => void );
            receiveMessage(params: any, callback: (err: any, data: ReceiveMessageResult) => void );
            deleteMessage(params: any, callback: (err: any, data: any) => void );
            deleteMessageBatch(params: any, callback: (err: any, data: DeleteMessageBatchResult) => void );
        }

        export interface SendMessageRequest {
            QueueUrl: string;
            MessageBody: string;
            DelaySeconds: number;
        }

        export interface ReceiveMessageRequest {
            QueueUrl: string;
            MaxNumberOfMessages: number;
            VisibilityTimeout: number;
            AttributeName: string[];
        }

        export interface DeleteMessageBatchRequest {
            QueueUrl: string;
            Entries: DeleteMessageBatchRequestEntry[];
        }

        export class DeleteMessageBatchRequestEntry {
            Id: string;
            ReceiptHandle: string;
        }

        export interface DeleteMessageRequest {
            QueueUrl: string;
            ReceiptHandle: string;
            Attribute: Attribute[];
        }

        export class Attribute {
            Name: string;
            Value: string;
        }

        export interface SendMessageBatchRequest {
            QueueUrl: string;
            Entries: SendMessageBatchRequestEntry[];
        }

        export class SendMessageBatchRequestEntry {
            Id: string;
            MessageBody: string;
            DelaySeconds: number;
        }

        export class SendMessageResult {
            MessageId: string;
            MD5OfMessageBody: string;
        }

        export class ReceiveMessageResult {
            Messages: Message[];
        }

        export class Message {
            MessageId: string;
            ReceiptHandle: string;
            MD5OfBody: string;
            Body: string;
            Attribute: Attribute[];
        }

        export class DeleteMessageBatchResult {
            DeleteMessageBatchResultEntry: DeleteMessageBatchResultEntry[];
            BatchResultErrorEntry: BatchResultErrorEntry[];
        }

        export class DeleteMessageBatchResultEntry {
            Id: string;
        }

        export class BatchResultErrorEntry {
            Id: string;
            Code: string;
            Message: string;
            SenderFault: string;
        }

        export class SendMessageBatchResult {
            SendMessageBatchResultEntry: SendMessageBatchResultEntry[];
            BatchResultErrorEntry: BatchResultErrorEntry[];
        }

        export class SendMessageBatchResultEntry {
            Id: string;
            MessageId: string;
            MD5OfMessageBody: string;
        }


    }

    declare module Ses {

        export interface Client {
            config: ClientConfig;

            sendEmail(params: any, callback: (err: any, data: SendEmailResult) => void );
        }

        export interface SendEmailRequest {
            Source: string;
            Destination: Destination;
            Message: Message;
            ReplyToAddresses: string[];
            ReturnPath: string;
        }

        export class Destination {
            ToAddresses: string[];
            CcAddresses: string[];
            BccAddresses: string[];
        }

        export class Message {
            Subject: Content;
            Body: Body;
        }

        export class Content {
            Data: string;
            Charset: string;
        }

        export class Body {
            Text: Content;
            Html: Content;
        }

        export class SendEmailResult {
            MessageId: string;
        }

    }
}