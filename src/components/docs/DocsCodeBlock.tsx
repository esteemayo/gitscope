'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

import { DocsCodeBlockProps } from '@/types/docs/codeBlock/docs.code.block.type';
import '../../styles/components/docs/DocsCodeBlock.scss';

const DocsCodeBlock = ({ code, language }: DocsCodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await window.navigator.clipboard.writeText('');

    setIsCopied(true);

    window.setTimeout(() => {
      setIsCopied(false);
    }, 1800);
  };

  return (
    <div className='docs-code-block'>
      <div className='docs-code-block__header'>
        <span className='docs-code-block__header--language'>{language}</span>

        <button
          type='button'
          onClick={handleCopy}
          className='docs-code-block__header--copy-btn'
          aria-label='Copy code'
        >
          {isCopied ? (
            <>
              <Check
                size={14}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy
                size={14}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default DocsCodeBlock;
