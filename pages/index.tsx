import { Component, Suspense, type ReactNode } from "react";

export default function Index() {
  return (
    <Suspense>
      <Loading />
    </Suspense>
  );
}

const promise = Promise.withResolvers();

function Loading() {
  throw promise.promise;
  return null;
}

class FakeSuspense extends Component<{ children: ReactNode }> {
  render() {
    return null;
  }
}
