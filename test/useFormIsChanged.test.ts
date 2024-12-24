import { describe, expect, it } from 'vitest'
import { useForm } from '../src/lib/useForm'
import { basicSchema } from './testUtils'

describe('isChanged', () => {
  it('should be false by default', () => {
    const form = useForm({
      schema: basicSchema,
      onSubmit: (data) => {
        return data
      },

    })

    const name = form.register('name')

    expect(name.attrs.isChanged.value).toEqual(false)
  })

  it('should be true when `onChange` is called', () => {
    const form = useForm({
      schema: basicSchema,
      onSubmit: (data) => {
        return data
      },
    })

    const name = form.register('name')

    name.attrs.onChange()

    expect(name.attrs.isChanged.value).toEqual(true)
  })
})
