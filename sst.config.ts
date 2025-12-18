// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "vg-digital-services-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "ap-south-1", // Forces Mumbai region
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("vg-digital-services-app");
  },
});
