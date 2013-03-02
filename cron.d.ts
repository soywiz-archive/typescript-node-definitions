module "cron" {
    class CronJob {
        constructor (cronTime: string, onTick: () => any, onComplete?: () => any,
            start?: bool, timezone?: string, context?: any);
        constructor (cronTime: Date, onTick: () => any, onComplete?: () => any,
            start?: bool, timezone?: string, context?: any);

        start();
        stop();
    }
}