import * as React from 'react';
import { NextPage } from 'next';
import { Text, Link } from '@fluentui/react-components';

const IndexPage: NextPage = () => (
  <>
    <Text>Welcome to Your Fluent UI App</Text>
    <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
    <Link href="https://stackoverflow.com/questions/tagged/fluent-ui">
      Stack Overflow
    </Link>
    <Link href="https://github.com/microsoft/fluentui">Github</Link>
    <Link href="https://twitter.com/fluentui">Twitter</Link>
    <Text>Design System</Text>
  </>
);

export default IndexPage;
