// You can export interfaces and enums etc for reuse elsewhere
export interface Human {
  name: string,
  age?: number
}

// Can't export as default in line.
enum ExportType {
  Zero = 'ZERO',
  // 1 = 'ONE' Doesn't seem like you can name it a number
  One = 'ONE'
}
// Would have to be done this way.
export default ExportType;