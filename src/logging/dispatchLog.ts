interface IUsageEvent {
  readonly type: "USAGE";
  readonly event: any;
}

interface IErrorEvent {
  type: "ERROR";
  event: any;
  message: string;
}

export default function dispatchLog(event: IUsageEvent | IErrorEvent) {
  requestAnimationFrame(() =>
    setTimeout(() => {
      console.log({ ...event, ua: window.navigator.userAgent });
    })
  );
}
