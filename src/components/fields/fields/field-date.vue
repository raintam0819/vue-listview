<template>
  <el-date-picker
    v-model="value"
    :placeholder="field.label"
    :disabled="field.disabled"
    v-bind="mergedProps"
    v-on="mergedEvents"
  />
</template>

<script>
import fieldMixin from './field-mixin'

export default {
  name: 'FieldDate',

  mixins: [fieldMixin],

  data() {
    return {
      defaultProps: {
        clearable: true,
        style: { width: '180px' }
      }
    }
  }
}
</script>
