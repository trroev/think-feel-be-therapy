import type {
  LexicalEditorProps,
  LexicalRichTextAdapter,
} from '@payloadcms/richtext-lexical'
import { lexicalEditor, lexicalHTMLField } from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from 'lexical'
import type { Field, RichTextField } from 'payload'
import { deepMerge } from 'payload'

type LexicalRichTextField = RichTextField<
  SerializedEditorState,
  LexicalRichTextAdapter,
  LexicalEditorProps
>

type RichTextWithHtmlFieldOptions = {
  richTextOverrides?: Partial<Omit<LexicalRichTextField, 'name'>>
}

export const richTextWithHtmlField = (
  name: string,
  options: RichTextWithHtmlFieldOptions = {}
): [LexicalRichTextField, Field] => {
  const richText = {
    ...deepMerge<LexicalRichTextField>(
      {
        editor: lexicalEditor({
          features: ({ defaultFeatures }) => defaultFeatures,
        }),
        name,
        type: 'richText',
      },
      options.richTextOverrides ?? {}
    ),
    name,
  }

  return [
    richText,
    lexicalHTMLField({
      htmlFieldName: `${name}HTML`,
      lexicalFieldName: name,
    }),
  ]
}
