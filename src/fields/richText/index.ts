import type {
  FeatureProviderServer,
  LexicalEditorProps,
  LexicalRichTextAdapter,
} from '@payloadcms/richtext-lexical'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from 'lexical'
import type { RichTextField } from 'payload'
import { deepMerge } from 'payload'

type LexicalRichTextField = RichTextField<
  SerializedEditorState,
  LexicalRichTextAdapter,
  LexicalEditorProps
>

export type RichTextFieldOverrides = {
  richTextOverrides?: Partial<LexicalRichTextField>
}

type RichText = (
  overrides?: RichTextFieldOverrides,
  additions?: {
    features?: FeatureProviderServer[]
  }
) => [RichTextField]

export const richTextField: RichText = (overrides = {}, additions = {}) => {
  const { richTextOverrides = {} } = overrides

  const field = deepMerge<LexicalRichTextField>(
    {
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          ...(additions.features ?? []),
        ],
      }),
      name: 'richText',
      type: 'richText',
    },
    richTextOverrides
  )

  return [field]
}
