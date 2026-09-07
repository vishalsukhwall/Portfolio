import React from 'react';

export default function ErrorBoundaryFallback({ error }) {
  return <div role='alert'>Something went wrong: {error?.message}</div>;
}
