"use client";

import { useEffect } from "react";

import { datadogRum } from "@datadog/browser-rum";
import { reactPlugin } from "@datadog/browser-rum-react";

import packageJson from "../../package.json";

export default function DatadogInit() {
  useEffect(() => {
    const applicationId = process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID;
    const clientToken = process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN;

    if (!applicationId || !clientToken) return;
    if (datadogRum.getInitConfiguration()) return;

    datadogRum.init({
      applicationId,
      clientToken,
      site: "ap1.datadoghq.com",
      service: "shitamachi-it-hp",
      env: process.env.NEXT_PUBLIC_DATADOG_ENV ?? "prod",
      version: packageJson.version,
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackResources: true,
      trackUserInteractions: true,
      trackLongTasks: true,
      plugins: [reactPlugin({ router: false })],
    });
  }, []);

  return null;
}
