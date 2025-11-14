import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const content = `# Wiki `;

function Wiki() {
  return <MarkdownRenderer content={content} />;
}

export default Wiki;