import dispatchLog from "./dispatchLog";

export default function logaction() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    dispatchLog({ type: "USAGE", event: { target } });
  };
}
