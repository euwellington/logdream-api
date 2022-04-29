declare module "*.json" {
    const value: any;
    export default value;
}

declare namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
}