//#region dist/.types-work/mathjax-CKU2W8zq.d.ts
interface MathSvg {
  svg: string;
  widthEm: number;
  ascentEm: number;
  descentEm: number;
}
interface MathRenderer {
  loadMathJax(): Promise<void>;
  mathMLToSvg(mathml: string): Promise<MathSvg>;
}
//#endregion
//#region dist/.types-work/hyperlink-BnJnsq2_.d.ts
type MathStyle = 'roman' | 'italic' | 'bold' | 'boldItalic';
interface MathRun {
  kind: 'run';
  text: string;
  style: MathStyle;
}
interface MathFraction {
  kind: 'fraction';
  num: MathNode[];
  den: MathNode[];
  bar?: boolean;
}
interface MathScript {
  kind: 'sup' | 'sub' | 'subSup';
  base: MathNode[];
  sup?: MathNode[];
  sub?: MathNode[];
}
interface MathNary {
  kind: 'nary';
  op: string;
  limLoc?: string;
  sub?: MathNode[];
  sup?: MathNode[];
  body: MathNode[];
}
interface MathDelimiter {
  kind: 'delimiter';
  begChar: string;
  endChar: string;
  items: MathNode[][];
}
interface MathRadical {
  kind: 'radical';
  index?: MathNode[];
  radicand: MathNode[];
}
interface MathLimit {
  kind: 'limit';
  base: MathNode[];
  lower?: MathNode[];
  upper?: MathNode[];
}
interface MathArray {
  kind: 'array';
  rows: MathNode[][][];
  align: 'eq' | 'center' | 'left';
}
interface MathGroupChr {
  kind: 'groupChr';
  char: string;
  pos: 'top' | 'bot';
  base: MathNode[];
}
interface MathBar {
  kind: 'bar';
  pos: 'top' | 'bot';
  base: MathNode[];
}
interface MathAccent {
  kind: 'accent';
  char: string;
  base: MathNode[];
}
interface MathFunc {
  kind: 'func';
  name: MathNode[];
  arg: MathNode[];
}
interface MathGroup {
  kind: 'group';
  items: MathNode[];
}
interface MathPhant {
  kind: 'phant';
  show: boolean;
  zeroWid?: boolean;
  zeroAsc?: boolean;
  zeroDesc?: boolean;
  base: MathNode[];
}
interface MathSPre {
  kind: 'sPre';
  sub: MathNode[];
  sup: MathNode[];
  base: MathNode[];
}
interface MathBox {
  kind: 'box';
  base: MathNode[];
}
interface MathBorderBox {
  kind: 'borderBox';
  hideTop?: boolean;
  hideBot?: boolean;
  hideLeft?: boolean;
  hideRight?: boolean;
  strikeH?: boolean;
  strikeV?: boolean;
  strikeBltr?: boolean;
  strikeTlbr?: boolean;
  base: MathNode[];
}
type MathNode = MathRun | MathFraction | MathScript | MathNary | MathDelimiter | MathRadical | MathLimit | MathArray | MathGroupChr | MathBar | MathAccent | MathFunc | MathGroup | MathPhant | MathSPre | MathBox | MathBorderBox;
type SpaceLine = {
  type: 'pct';
  val: number;
} | {
  type: 'pts';
  val: number;
};
interface ChartSeries {
  name: string;
  color: string | null;
  values: (number | null)[];
  dataPointColors?: (string | null)[] | null;
  dataLabelColors?: (string | null)[] | null;
  labelColor?: string | null;
  seriesType?: string | null;
  useSecondaryAxis?: boolean | null;
  categories?: string[] | null;
  showMarker?: boolean | null;
  valFormatCode?: string | null;
  markerSymbol?: string | null;
  markerSize?: number | null;
  markerFill?: string | null;
  markerLine?: string | null;
  dataPointOverrides?: ChartDataPointOverride[] | null;
  dataLabelOverrides?: ChartDataLabelOverride[] | null;
  seriesDataLabels?: ChartSeriesDataLabels | null;
  errBars?: ChartErrBars[] | null;
  bubbleSizes?: (number | null)[] | null;
  smooth?: boolean | null;
  trendLines?: ChartTrendline[] | null;
  lineHidden?: boolean | null;
}
interface ChartTrendline {
  trendlineType: string;
  order?: number | null;
  period?: number | null;
  forward?: number | null;
  backward?: number | null;
  intercept?: number | null;
  dispRSqr?: boolean | null;
  dispEq?: boolean | null;
  lineColor?: string | null;
  lineWidthEmu?: number | null;
}
interface ChartDataPointOverride {
  idx: number;
  color?: string;
  markerSymbol?: string;
  markerSize?: number;
  markerFill?: string;
  markerLine?: string;
  explosion?: number;
}
interface ChartDataLabelOverride {
  idx: number;
  text: string;
  position?: string;
  fontColor?: string;
  fontSizeHpt?: number;
  fontBold?: boolean;
  labelBox?: ChartLabelBox;
  showVal?: boolean;
  showCatName?: boolean;
  showSerName?: boolean;
  showPercent?: boolean;
  deleted?: boolean;
}
interface ChartLabelBox {
  fill?: string;
  borderColor?: string;
  borderWidthEmu?: number;
}
interface ChartSeriesDataLabels {
  showVal: boolean;
  showCatName: boolean;
  showSerName: boolean;
  showPercent: boolean;
  position?: string;
  fontColor?: string;
  formatCode?: string;
  fontBold?: boolean;
  fontSizeHpt?: number;
  labelBox?: ChartLabelBox;
  showLeaderLines?: boolean;
  leaderLineColor?: string;
  leaderLineWidthEmu?: number;
}
interface ChartErrBars {
  dir: string;
  barType: string;
  plus: (number | null)[];
  minus: (number | null)[];
  noEndCap: boolean;
  color?: string;
  lineWidthEmu?: number;
  dash?: string;
}
type ChartType = 'line' | 'stackedLine' | 'stackedLinePct' | 'clusteredBar' | 'clusteredBarH' | 'stackedBar' | 'stackedBarH' | 'stackedBarPct' | 'stackedBarHPct' | 'area' | 'stackedArea' | 'stackedAreaPct' | 'pie' | 'doughnut' | 'scatter' | 'bubble' | 'radar' | 'waterfall' | 'stock' | 'boxWhisker' | 'sunburst' | string;
interface ChartModel {
  chartType: ChartType;
  title: string | null;
  categories: string[];
  series: ChartSeries[];
  varyColors?: boolean | null;
  showDataLabels: boolean;
  valMin: number | null;
  valMax: number | null;
  catAxisTitle: string | null;
  valAxisTitle: string | null;
  catAxisHidden: boolean;
  valAxisHidden: boolean;
  catAxisLineHidden: boolean;
  valAxisLineHidden: boolean;
  plotAreaBg: string | null;
  chartBg: string | null;
  showLegend: boolean;
  legendPos: 'r' | 'l' | 't' | 'b' | 'tr' | null;
  catAxisCrossBetween: 'between' | 'midCat' | string;
  valAxisMajorTickMark: 'cross' | 'out' | 'in' | 'none' | string;
  catAxisMajorTickMark: 'cross' | 'out' | 'in' | 'none' | string;
  valAxisMinorTickMark?: 'cross' | 'out' | 'in' | 'none' | string | null;
  catAxisMinorTickMark?: 'cross' | 'out' | 'in' | 'none' | string | null;
  titleFontSizeHpt: number | null;
  titleFontColor: string | null;
  titleFontFace: string | null;
  catAxisFontSizeHpt: number | null;
  valAxisFontSizeHpt: number | null;
  catAxisFontColor?: string | null;
  valAxisFontColor?: string | null;
  dataLabelFontSizeHpt: number | null;
  subtotalIndices: number[];
  legendManualLayout?: LegendManualLayout | null;
  valAxisFormatCode?: string | null;
  barGapWidth?: number | null;
  barOverlap?: number | null;
  dataLabelPosition?: string | null;
  dataLabelFontColor?: string | null;
  dataLabelFormatCode?: string | null;
  titleFontBold?: boolean | null;
  catAxisFontBold?: boolean | null;
  valAxisFontBold?: boolean | null;
  catAxisTitleFontSizeHpt?: number | null;
  catAxisTitleFontBold?: boolean | null;
  catAxisTitleFontColor?: string | null;
  valAxisTitleFontSizeHpt?: number | null;
  valAxisTitleFontBold?: boolean | null;
  valAxisTitleFontColor?: string | null;
  catAxisFontFace?: string | null;
  valAxisFontFace?: string | null;
  catAxisTitleFontFace?: string | null;
  valAxisTitleFontFace?: string | null;
  dataLabelFontFace?: string | null;
  legendFontFace?: string | null;
  legendFontColor?: string | null;
  legendFontSizeHpt?: number | null;
  legendFontBold?: boolean | null;
  themeMajorFontLatin?: string | null;
  themeMinorFontLatin?: string | null;
  chartBorderColor?: string | null;
  chartBorderWidthEmu?: number | null;
  catAxisCrosses?: string | null;
  catAxisCrossesAt?: number | null;
  valAxisCrosses?: string | null;
  valAxisCrossesAt?: number | null;
  catAxisLineColor?: string | null;
  catAxisLineWidthEmu?: number | null;
  valAxisLineColor?: string | null;
  valAxisLineWidthEmu?: number | null;
  catAxisFormatCode?: string | null;
  catAxisMin?: number | null;
  catAxisMax?: number | null;
  titleManualLayout?: ChartManualLayout | null;
  plotAreaManualLayout?: ChartManualLayout | null;
  scatterStyle?: string | null;
  radarStyle?: string | null;
  secondaryValAxis?: SecondaryValueAxis | null;
  date1904?: boolean;
  holeSize?: number | null;
  firstSliceAngle?: number | null;
  dispBlanksAs?: string | null;
  valAxisMajorGridlines?: boolean | null;
  catAxisMajorGridlines?: boolean | null;
  valAxisGridlineColor?: string | null;
  valAxisGridlineWidthEmu?: number | null;
  catAxisGridlineColor?: string | null;
  catAxisGridlineWidthEmu?: number | null;
  valAxisMinorGridlines?: boolean | null;
  valAxisMajorUnit?: number | null;
  valAxisMinorUnit?: number | null;
  valAxisLogBase?: number | null;
  valAxisOrientation?: 'minMax' | 'maxMin' | string | null;
  catAxisOrientation?: 'minMax' | 'maxMin' | string | null;
  catAxisTickLabelPos?: string | null;
  valAxisTickLabelPos?: string | null;
  catAxisLabelRotation?: number | null;
  stockHiLowLines?: boolean | null;
  stockHiLowLineColor?: string | null;
  stockUpDownBars?: boolean | null;
  chartexBox?: ChartexBoxWhisker | null;
  chartexSunburst?: ChartexSunburst | null;
  chartexAccents?: string[] | null;
}
interface ChartexBoxSeries {
  name: string;
  color?: string | null;
  valuesByCategory: number[][];
  meanMarker: boolean;
  meanLine: boolean;
  showOutliers: boolean;
  showNonoutliers: boolean;
  quartileMethod: string;
}
interface ChartexBoxWhisker {
  categories: string[];
  series: ChartexBoxSeries[];
}
interface ChartexSunburstRow {
  path: string[];
  size: number;
}
interface ChartexSunburst {
  rows: ChartexSunburstRow[];
}
interface SecondaryValueAxis {
  min: number | null;
  max: number | null;
  title: string | null;
  hidden: boolean;
  formatCode?: string | null;
  fontColor?: string | null;
  fontSizeHpt?: number | null;
  lineColor?: string | null;
  lineWidthEmu?: number | null;
  lineHidden: boolean;
  majorTickMark: string;
  majorUnit?: number | null;
  titleFontSizeHpt?: number | null;
  titleFontBold?: boolean | null;
  titleFontColor?: string | null;
}
interface ChartManualLayout {
  xMode: string;
  yMode: string;
  layoutTarget?: string;
  x: number;
  y: number;
  w?: number;
  h?: number;
}
interface LegendManualLayout {
  xMode: string;
  yMode: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
type OoxmlErrorCode = 'encrypted' | 'invalid-password' | 'unsupported-encryption' | 'legacy-binary-format' | 'not-ooxml';
type OoxmlErrorStage = 'container' | 'decompression' | 'parsing' | 'serialization' | 'layout' | 'rendering' | 'worker';
type OoxmlErrorSource = 'container' | 'zip-part' | 'parser' | 'serializer' | 'layout' | 'renderer' | 'worker';
declare class OoxmlError extends Error {
  readonly code: OoxmlErrorCode;
  constructor(code: OoxmlErrorCode, message: string);
}
type OoxmlFormat = 'docx' | 'xlsx' | 'pptx';
interface OoxmlResourceUsageSnapshot {
  readonly archiveEntryCount: number;
  readonly declaredInflatedBytes: number;
  readonly largestInflatedEntryBytes?: number;
  readonly distinctInflatedBytes: number;
  readonly operationInflatedBytes: number;
}
type ExtensibleLiteral<Known extends string> = Known | (string & Record<never, never>);
type OoxmlResourceName = ExtensibleLiteral<'archive' | 'archive-entry' | 'xml-event' | 'xml-context' | 'xml-tree' | 'worksheet-row' | 'worksheet-shell'>;
type OoxmlResourceMetric = ExtensibleLiteral<'declared-inflated-bytes' | 'actual-inflated-bytes' | 'entry-count' | 'central-directory-bytes' | 'distinct-inflated-bytes' | 'bytes' | 'depth' | 'projected-bytes'>;
interface OoxmlResourceViolation {
  readonly format: OoxmlFormat;
  readonly operation: string;
  readonly resource: OoxmlResourceName;
  readonly metric: OoxmlResourceMetric;
  readonly part?: string;
  readonly limit: number;
  readonly observed: number;
  readonly configurable: boolean;
  readonly usage: OoxmlResourceUsageSnapshot;
}
interface OoxmlResourceLimitErrorDetails {
  readonly stage: OoxmlErrorStage;
  readonly violation: OoxmlResourceViolation;
}
declare class OoxmlResourceLimitError extends Error {
  readonly code: 'ooxml-resource-limit';
  readonly details: OoxmlResourceLimitErrorDetails;
  constructor(message: string, details: OoxmlResourceLimitErrorDetails);
}
interface OoxmlResourcePolicySnapshot {
  readonly maxArchiveEntryBytes: number | null;
  readonly maxTotalInflatedBytes: number | null;
  readonly maxArchiveEntries: number | null;
}
interface OoxmlResourceMetricsCheckpoint {
  readonly name: string;
  readonly elapsedMs: number;
  readonly usage?: OoxmlResourceUsageSnapshot;
}
interface OoxmlResourceMetrics {
  readonly schemaVersion: 1;
  readonly scope: 'load' | 'session';
  readonly format: OoxmlFormat;
  readonly mode: 'main' | 'worker' | 'node';
  readonly status: 'ok' | 'error';
  readonly sourceBytes?: number;
  readonly elapsedMs: number;
  readonly policy: Readonly<OoxmlResourcePolicySnapshot>;
  readonly usage?: OoxmlResourceUsageSnapshot;
  readonly checkpoints: readonly OoxmlResourceMetricsCheckpoint[];
  readonly outcome?: Readonly<Record<string, number>>;
  readonly error?: Readonly<{
    readonly code?: string;
    readonly stage?: string;
    readonly resource?: string;
    readonly metric?: string;
  }>;
}
type OoxmlResourceLimit = number | null;
interface OoxmlResourceLimits {
  maxArchiveEntryBytes?: OoxmlResourceLimit;
  maxTotalInflatedBytes?: OoxmlResourceLimit;
  maxArchiveEntries?: OoxmlResourceLimit;
}
interface LoadOptions$1 {
  useGoogleFonts?: boolean;
  password?: string;
  wasmUrl?: string | URL;
  maxZipEntryBytes?: number;
  resourceLimits?: OoxmlResourceLimits;
  debug?: boolean;
  onResourceMetrics?: (metrics: OoxmlResourceMetrics) => void;
  workerTimeoutMs?: number;
  math?: MathRenderer;
}
type OoxmlDecodedImageLimitMetric = 'image-pixels' | 'active-decoded-bytes';
declare class OoxmlDecodedImageLimitError extends RangeError {
  readonly metric: OoxmlDecodedImageLimitMetric;
  readonly limit: number;
  readonly observed: number;
  readonly code: 'ooxml-decoded-image-limit';
  constructor(metric: OoxmlDecodedImageLimitMetric, limit: number, observed: number);
}
declare function isOoxmlDecodedImageLimitError(error: unknown): error is OoxmlDecodedImageLimitError;
type HyperlinkTarget = {
  kind: 'external';
  url: string;
} | {
  kind: 'internal';
  ref: string;
  slideIndex?: number;
};
declare function openExternalHyperlink(url: string, allowed?: readonly string[], win?: Pick<Window, 'open'> | undefined): boolean;
//#endregion
//#region dist/.types-work/find-highlight-DkZhNxUb.d.ts
interface AutoResizeOptions {
  pauseWhenHidden?: boolean;
}
declare function autoResize(render: (width: number, height: number) => void | Promise<void>, element: Element, opts?: AutoResizeOptions): () => void;
interface ZoomableViewer {
  getScale(): number;
  setScale(scale: number): void | Promise<void>;
  zoomIn(): void | Promise<void>;
  zoomOut(): void | Promise<void>;
  fitWidth(): void | Promise<void>;
  fitPage(): void | Promise<void>;
}
interface FindMatchesOptions {
  caseSensitive?: boolean;
}
interface FindMatch<Loc = unknown> {
  matchIndex: number;
  text: string;
  location: Loc;
}
interface FindHighlightColors {
  match?: string;
  active?: string;
}
//#endregion
//#region dist/.types-work/xlsx-D1NhipZN.d.ts
interface Workbook {
  sheets: SheetMeta[];
  date1904?: boolean;
  parseError?: string;
}
type SheetVisibility = 'visible' | 'hidden' | 'veryHidden';
interface SheetMeta {
  name: string;
  sheetId: number;
  rId: string;
  tabColor?: string | null;
  visibility?: 'hidden' | 'veryHidden';
}
interface MergeCell {
  top: number;
  left: number;
  bottom: number;
  right: number;
}
interface Worksheet {
  name: string;
  rows: Row[];
  colWidths: Record<number, number>;
  rowHeights: Record<number, number>;
  colOutlineLevels?: Record<number, number>;
  colCollapsed?: Record<number, boolean>;
  colHidden?: Record<number, boolean>;
  defaultColWidth: number;
  defaultRowHeight: number;
  mergeCells: MergeCell[];
  freezeRows: number;
  freezeCols: number;
  conditionalFormats: ConditionalFormat[];
  images: ImageAnchor[];
  charts: ChartAnchor[];
  shapeGroups?: ShapeAnchor[];
  showZeros?: boolean;
  showGridlines?: boolean;
  rightToLeft?: boolean;
  outlinePr?: OutlinePr;
  tabColor?: string | null;
  autoFilter?: CellRange$1 | null;
  hyperlinks?: Hyperlink[];
  commentRefs?: string[];
  comments?: XlsxComment[];
  dataValidations?: DataValidation[];
  definedNames?: DefinedName[];
  tables?: TableInfo[];
  slicers?: SlicerAnchor[];
  pivotTables?: PivotTableMetadata[];
  pivotDiagnostics?: PivotDiagnostic[];
  sparklineGroups?: SparklineGroup[];
  defaultFontFamily?: string;
  defaultFontSize?: number;
  date1904?: boolean;
  parseError?: string;
}
interface PivotTableMetadata {
  name: string;
  cacheId: number;
  location: PivotLocation;
  rowFields: number[];
  columnFields: number[];
  pageFields: PivotPageField[];
  dataFields: PivotDataField[];
  refreshOnLoad?: boolean;
  cacheInvalid?: boolean;
  cacheDefinitionPart?: string;
  cacheSource?: PivotCacheSource;
  status: PivotMetadataStatus;
  extensionUris?: string[];
}
interface PivotLocation extends CellRange$1 {
  firstHeaderRow: number;
  firstDataRow: number;
  firstDataCol: number;
}
interface PivotPageField {
  field: number;
  item?: number;
  name?: string;
}
interface PivotDataField {
  field: number;
  subtotal?: string;
  rawSubtotal?: string;
  name?: string;
}
type PivotCacheSource = {
  kind: 'worksheet';
  sheet?: string;
  reference?: string;
  name?: string;
  relationshipId?: string;
} | {
  kind: 'external';
} | {
  kind: 'consolidation';
} | {
  kind: 'scenario';
};
type PivotMetadataStatus = {
  state: 'complete';
} | {
  state: 'partial';
  reasons: PivotPartialReason[];
};
type PivotPartialReason = {
  kind: 'missingCacheRelationship';
} | {
  kind: 'malformedCacheRelationships';
} | {
  kind: 'unreadableCacheRelationships';
} | {
  kind: 'externalCacheRelationship';
} | {
  kind: 'ambiguousCacheRelationship';
} | {
  kind: 'unreadableCacheDefinition';
} | {
  kind: 'malformedCacheDefinition';
} | {
  kind: 'malformedField';
  field: string;
} | {
  kind: 'unsupportedCacheSource';
  sourceType: string;
} | {
  kind: 'unresolvedWorksheetSourceRelationship';
} | {
  kind: 'unsupportedSemanticFeature';
  feature: string;
};
interface PivotDiagnostic {
  part: string;
  reason: {
    kind: 'unreadableWorksheetRelationships';
  } | {
    kind: 'malformedWorksheetRelationships';
  } | {
    kind: 'malformedPivotRelationship';
  } | {
    kind: 'externalPivotRelationship';
  } | {
    kind: 'unreadablePart';
  } | {
    kind: 'malformedXml';
  } | {
    kind: 'missingIdentity';
  } | {
    kind: 'invalidLocation';
  };
}
interface SparklineGroup {
  kind: 'line' | 'column' | 'stem';
  markers: boolean;
  high: boolean;
  low: boolean;
  first: boolean;
  last: boolean;
  negative: boolean;
  displayXAxis: boolean;
  displayEmptyCellsAs: string;
  minAxisType: string;
  maxAxisType: string;
  manualMin?: number;
  manualMax?: number;
  lineWeight: number;
  colorSeries?: string;
  colorNegative?: string;
  colorAxis?: string;
  colorMarkers?: string;
  colorFirst?: string;
  colorLast?: string;
  colorHigh?: string;
  colorLow?: string;
  sparklines: Sparkline[];
}
interface Sparkline {
  row: number;
  col: number;
  values: (number | null)[];
}
interface SlicerAnchor {
  fromCol: number;
  fromColOff: number;
  fromRow: number;
  fromRowOff: number;
  toCol: number;
  toColOff: number;
  toRow: number;
  toRowOff: number;
  caption: string;
  items: SlicerItem[];
  style?: SlicerStyle;
}
interface SlicerItem {
  name: string;
  selected: boolean;
}
interface SlicerStyle {
  whole?: SlicerElementStyle;
  header?: SlicerElementStyle;
  selectedItemWithData?: SlicerElementStyle;
  unselectedItemWithData?: SlicerElementStyle;
}
interface SlicerElementStyle {
  fontColor?: string;
  fontSize?: number;
  fontBold?: boolean;
  fontFamily?: string;
  fillColor?: string;
  borderColor?: string;
}
interface TableInfo {
  range: CellRange$1;
  styleName: string;
  headerRowCount: number;
  totalsRowCount: number;
  showRowStripes: boolean;
  showColumnStripes: boolean;
  showFirstColumn: boolean;
  showLastColumn: boolean;
  accentColor: string;
  isCustom?: boolean;
  wholeTableDxf?: number;
  headerRowDxf?: number;
  totalRowDxf?: number;
  firstColumnDxf?: number;
  lastColumnDxf?: number;
  band1HorizontalDxf?: number;
  band2HorizontalDxf?: number;
  columns: TableColumnInfo[];
}
interface TableColumnInfo {
  dataDxfId?: number;
  headerRowDxfId?: number;
  totalsRowDxfId?: number;
}
interface DefinedName {
  name: string;
  formula: string;
}
interface XlsxComment {
  cellRef: string;
  author?: string;
  text: string;
}
interface DataValidation {
  sqref: string;
  validationType?: string;
  operator?: string;
  formula1?: string;
  formula2?: string;
  allowBlank?: boolean;
  promptTitle?: string;
  prompt?: string;
  errorTitle?: string;
  errorMessage?: string;
}
type XlsxChartSeries = ChartSeries;
type SeriesDataLabels = ChartSeriesDataLabels;
type DataLabelOverride = ChartDataLabelOverride;
type DataPointOverride = ChartDataPointOverride;
type ErrBars = ChartErrBars;
type ManualLayout = ChartManualLayout;
interface ChartAnchor {
  fromCol: number;
  fromColOff: number;
  fromRow: number;
  fromRowOff: number;
  toCol: number;
  toColOff: number;
  toRow: number;
  toRowOff: number;
  chart: ChartModel;
}
interface ShapeAnchor {
  fromCol: number;
  fromColOff: number;
  fromRow: number;
  fromRowOff: number;
  toCol: number;
  toColOff: number;
  toRow: number;
  toRowOff: number;
  editAs?: string;
  nativeExtCx: number;
  nativeExtCy: number;
  shapes: ShapeInfo[];
}
interface ShapeInfo {
  x: number;
  y: number;
  w: number;
  h: number;
  rot: number;
  flipH?: boolean;
  flipV?: boolean;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth: number;
  geom: ShapeGeom;
  text?: ShapeText;
}
interface ShapeText {
  anchor: string;
  wrap: string;
  autoFit?: string;
  fontScale?: number | null;
  lnSpcReduction?: number | null;
  lIns: number;
  tIns: number;
  rIns: number;
  bIns: number;
  paragraphs: ShapeParagraph[];
}
interface ShapeParagraph {
  align: string;
  rtl?: boolean;
  marL?: number;
  marR?: number;
  indent?: number;
  spaceLine?: SpaceLine | null;
  runs: ShapeTextRun[];
}
type ShapeTextRun = {
  type: 'text';
  text: string;
  bold: boolean;
  italic: boolean;
  size: number;
  color?: string;
  fontFace?: string;
  fontFaceEa?: string;
  fontFaceCs?: string;
} | {
  type: 'break';
} | {
  type: 'math';
  nodes: MathNode[];
  display: boolean;
  fontSize?: number;
  color?: string;
};
type ShapeGeom = {
  type: 'preset';
  name: string;
  adj?: (number | null)[];
} | {
  type: 'custom';
  paths: PathInfo[];
} | {
  type: 'image';
  imagePath: string;
  mimeType: string;
  svgImagePath?: string;
  srcRect?: {
    l: number;
    t: number;
    r: number;
    b: number;
  };
  alpha?: number;
  duotone?: Duotone;
};
interface Duotone {
  clr1: string;
  clr2: string;
}
interface PathInfo {
  w: number;
  h: number;
  commands: PathCmd[];
}
type PathCmd = {
  op: 'moveTo';
  x: number;
  y: number;
} | {
  op: 'lineTo';
  x: number;
  y: number;
} | {
  op: 'cubicBezTo';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
} | {
  op: 'quadBezTo';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
} | {
  op: 'arcTo';
  wr: number;
  hr: number;
  stAng: number;
  swAng: number;
} | {
  op: 'close';
};
interface ImageAnchor {
  fromCol: number;
  fromColOff: number;
  fromRow: number;
  fromRowOff: number;
  toCol: number;
  toColOff: number;
  toRow: number;
  toRowOff: number;
  editAs?: string;
  nativeExtCx: number;
  nativeExtCy: number;
  imagePath: string;
  mimeType: string;
  svgImagePath?: string;
  srcRect?: {
    l: number;
    t: number;
    r: number;
    b: number;
  };
  alpha?: number;
  duotone?: Duotone;
}
interface CellRange$1 {
  top: number;
  left: number;
  bottom: number;
  right: number;
}
interface Hyperlink {
  col: number;
  row: number;
  url: string | null;
  location?: string | null;
  display?: string | null;
}
interface ConditionalFormat {
  sqref: CellRange$1[];
  rules: CfRule[];
}
type CfRule = {
  type: 'cellIs';
  operator: string;
  formulas: string[];
  dxfId: number | null;
  priority: number;
} | {
  type: 'expression';
  formula: string;
  dxfId: number | null;
  priority: number;
  stopIfTrue: boolean;
} | {
  type: 'colorScale';
  stops: CfStop[];
  priority: number;
} | {
  type: 'dataBar';
  color: string;
  min: CfValue;
  max: CfValue;
  priority: number;
  gradient: boolean;
} | {
  type: 'top10';
  top: boolean;
  percent: boolean;
  rank: number;
  dxfId: number | null;
  priority: number;
} | {
  type: 'aboveAverage';
  aboveAverage: boolean;
  equalAverage?: boolean;
  stdDev?: number;
  dxfId: number | null;
  priority: number;
} | {
  type: 'iconSet';
  iconSet: string;
  cfvos: CfValue[];
  reverse: boolean;
  priority: number;
  customIcons?: CfIcon[];
} | {
  type: 'other';
  kind: string;
  priority: number;
};
interface CfIcon {
  iconSet: string;
  iconId: number;
}
interface CfStop {
  kind: string;
  value: string | null;
  color: string;
}
interface CfValue {
  kind: string;
  value: string | null;
}
interface Row {
  index: number;
  height: number | null;
  cells: Cell[];
  outlineLevel?: number;
  collapsed?: boolean;
  hidden?: boolean;
}
interface OutlinePr {
  summaryBelow: boolean;
  summaryRight: boolean;
}
interface Cell {
  col: number;
  row: number;
  value: CellValue;
  styleIndex?: number;
  formula?: string;
  showPhonetic?: boolean;
}
type CellValue = {
  type: 'empty';
} | {
  type: 'text';
  text: string;
  runs?: Run[];
  phoneticRuns?: PhoneticRun[];
  phoneticPr?: PhoneticProperties;
} | {
  type: 'number';
  number: number;
} | {
  type: 'bool';
  bool: boolean;
} | {
  type: 'error';
  error: string;
} | {
  type: 'shared';
  si: number;
};
interface PhoneticRun {
  sb: number;
  eb: number;
  text: string;
}
type PhoneticType = 'fullwidthKatakana' | 'halfwidthKatakana' | 'Hiragana' | 'noConversion';
type PhoneticAlignment = 'left' | 'center' | 'distributed' | 'noControl';
interface PhoneticProperties {
  fontId: number;
  type?: PhoneticType;
  alignment?: PhoneticAlignment;
}
interface Run {
  text: string;
  font?: RunFont;
}
interface RunFont {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strike: boolean;
  size?: number;
  color?: string | null;
  name?: string | null;
  underlineStyle?: string;
  vertAlign?: 'superscript' | 'subscript';
}
interface SharedString {
  text: string;
  runs?: Run[];
  phoneticRuns?: PhoneticRun[];
  phoneticPr?: PhoneticProperties;
}
interface NumFmt {
  numFmtId: number;
  formatCode: string;
}
interface Styles {
  fonts: CellFont[];
  fills: CellFill[];
  borders: Border[];
  cellXfs: CellXf[];
  numFmts: NumFmt[];
  dxfs: Dxf[];
}
interface Dxf {
  font: CellFont | null;
  fill: CellFill | null;
  border: Border | null;
  numFmt?: NumFmt | null;
}
interface CellFont {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strike: boolean;
  size: number;
  color: string | null;
  name: string | null;
  underlineStyle?: string;
  vertAlign?: 'superscript' | 'subscript';
}
interface CellFill {
  patternType: string;
  fgColor: string | null;
  bgColor: string | null;
  gradient?: GradientFillSpec | null;
}
interface GradientFillSpec {
  gradientType: string;
  degree: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
  stops: {
    position: number;
    color: string;
  }[];
}
interface Border {
  left: BorderEdge | null;
  right: BorderEdge | null;
  top: BorderEdge | null;
  bottom: BorderEdge | null;
  diagonalUp?: BorderEdge | null;
  diagonalDown?: BorderEdge | null;
  horizontal?: BorderEdge | null;
  vertical?: BorderEdge | null;
}
interface BorderEdge {
  style: string;
  color: string | null;
}
interface CellXf {
  fontId: number;
  fillId: number;
  borderId: number;
  numFmtId: number;
  alignH: string | null;
  alignV: string | null;
  wrapText: boolean;
  indent?: number;
  textRotation?: number;
  shrinkToFit?: boolean;
  readingOrder?: number;
}
interface ParsedWorkbook {
  workbook: Workbook;
  styles: Styles;
  sharedStrings: SharedString[];
}
interface ViewportRange {
  row: number;
  col: number;
  rows: number;
  cols: number;
}
interface XlsxTextRunInfo {
  sheetName: string;
  cellRef: string;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  row: number;
  col: number;
}
interface RenderViewportOptions {
  width?: number;
  height?: number;
  dpr?: number;
  defaultFontFamily?: string;
  defaultFontSize?: number;
  scrollOffsetX?: number;
  scrollOffsetY?: number;
  freezeRows?: number;
  freezeCols?: number;
  cellScale?: number;
  loadedImages?: Map<string, CanvasImageSource | null>;
  fetchImage?: (path: string, mimeType: string) => Promise<Blob>;
  onTextRun?: (info: XlsxTextRunInfo) => void;
  selectedRowRange?: {
    start: number;
    end: number;
    strong: boolean;
  } | null;
  selectedColRange?: {
    start: number;
    end: number;
    strong: boolean;
  } | null;
}
type ResolvedList = {
  kind: 'values';
  values: string[];
} | {
  kind: 'formula';
  formula: string;
};
interface WireSizeOverrides {
  rows?: Record<number, number | null>;
  cols?: Record<number, number | null>;
}
type WireRenderViewportOptions = Omit<RenderViewportOptions, 'onTextRun' | 'loadedImages' | 'fetchImage'> & {
  sizeOverrides?: WireSizeOverrides;
};
interface LoadOptions extends LoadOptions$1 {
  mode?: 'main' | 'worker';
}
declare class XlsxWorkbook {
  private metrics;
  private worker;
  private bridge;
  private parsedWorkbook;
  private sheetCache;
  private sheetLoads;
  private readonly rawParts;
  private queuedImageLoads;
  private readonly _fetchImage;
  private resourcePolicy;
  private math;
  private googleFontNames;
  private readonly retainedFontSets;
  private fontsDestroyed;
  private _mode;
  private generation;
  private archiveOperationTail;
  private worksheetPullClient;
  private workerTimeoutMs;
  private retainedSheetUsage;
  private resourceFailure;
  private constructor();
  get mode(): 'main' | 'worker';
  static load(source: string | ArrayBuffer, opts?: LoadOptions): Promise<XlsxWorkbook>;
  private _load;
  private retainFontsInSet;
  get sheetNames(): string[];
  get sheetCount(): number;
  get tabColors(): (string | null)[];
  sheetVisibility(sheetIndex: number): SheetVisibility;
  isHidden(sheetIndex: number): boolean;
  getWorksheet(sheetIndex: number): Promise<Worksheet>;
  getResourceMetrics(): Promise<OoxmlResourceMetrics>;
  private loadWorksheet;
  private loadWorksheetStream;
  private ensureWorksheetPullClient;
  private runArchiveOperation;
  getImage(imagePath: string, mimeType: string): Promise<Blob>;
  private getImageWithinArchiveOperation;
  private requestImage;
  toMarkdown(): Promise<string>;
  resolveValidationList(sheetIndex: number, formula1: string | undefined): Promise<ResolvedList>;
  cellText(ws: Worksheet, cell: Cell): string;
  renderViewport(target: HTMLCanvasElement | OffscreenCanvas, sheetIndex: number, viewport: ViewportRange, opts?: RenderViewportOptions): Promise<void>;
  renderViewportToBitmap(sheetIndex: number, viewport: ViewportRange, opts: WireRenderViewportOptions & {
    width: number;
    height: number;
  }): Promise<ImageBitmap>;
  private withWorksheetArchiveOperation;
  destroy(): void;
  private assertResourceHealthy;
}
type CanvasViewerRenderMode = 'main' | 'worker';
interface XlsxMatchLocation {
  sheet: number;
  sheetName: string;
  ref: string;
  row: number;
  col: number;
}
type HiddenSheetMode = 'show' | 'skip' | 'dim';
interface XlsxSheetViewerOptions extends LoadOptions$1 {
  cellScale?: number;
  resizable?: boolean;
  zoomMin?: number;
  zoomMax?: number;
  onScaleChange?: (scale: number) => void;
  onReady?: (sheetNames: string[]) => void;
  onSheetChange?: (index: number, total: number) => void;
  onError?: (err: Error) => void;
  onSelectionChange?: (selection: CellRange | null) => void;
  onHyperlinkClick?: (target: HyperlinkTarget) => void;
  enableHyperlinks?: boolean;
  selectionColor?: string;
  findHighlightColors?: FindHighlightColors;
  mode?: 'main' | 'worker';
  hiddenSheetMode?: HiddenSheetMode;
  onViewportChange?: (offset: XlsxViewportOffset) => void;
}
interface XlsxViewerOptions extends XlsxSheetViewerOptions {
  showZoomSlider?: boolean;
}
interface XlsxViewportOffset {
  readonly x: number;
  readonly y: number;
}
interface XlsxScrollToCellOptions {
  readonly align?: 'nearest' | 'start' | 'center' | 'end';
}
interface CellAddress {
  row: number;
  col: number;
}
type SelectionMode = 'cells' | 'rows' | 'cols' | 'all';
interface CellRange {
  anchor: CellAddress;
  active: CellAddress;
  mode: SelectionMode;
}
type XlsxViewerMount = {
  readonly kind: 'composite';
} | {
  readonly kind: 'sheet';
  readonly canvas: HTMLCanvasElement;
  readonly mode: CanvasViewerRenderMode;
};
declare class XlsxViewerEngine implements ZoomableViewer {
  private readonly hostDocument;
  private readonly hostWindow;
  private readonly acquisition;
  private readonly viewport;
  private readonly renderDispatcher;
  private wrapper;
  private canvas;
  private gridRegion;
  private rowGutter;
  private colGutter;
  private cornerGutter;
  private gutter;
  private rowOutline;
  private colOutline;
  private rowOutlineBands;
  private colOutlineBands;
  private stashedRowHeights;
  private stashedColWidths;
  private sizeOverrideStore;
  private readonly projectionId;
  private canvasArea;
  private scrollHost;
  private spacer;
  private readonly surface;
  private readonly overlayHost;
  private tabBar;
  private tabStrip;
  private tabList;
  private navPrev;
  private navNext;
  private tabs;
  private tabColors;
  private zoomSlider;
  private zoomLabel;
  private currentSheet;
  private sheetRequestGeneration;
  private fontBindingGeneration;
  private fontBinding;
  private _hiddenSheetMode;
  private currentWorksheet;
  private sheetViews;
  private opts;
  private readonly _mountKind;
  private readonly _mode;
  private _borrowed;
  private preparedWorkbook;
  private _destroyed;
  private resizeObserver;
  private _lastViewportNotification;
  private get anchorCell();
  private set anchorCell(value);
  private get activeCell();
  private set activeCell(value);
  private get selectionMode();
  private set selectionMode(value);
  private get isSelecting();
  private set isSelecting(value);
  private _pendingZoomAnchor;
  private readonly selectionController;
  private selectionOverlay;
  private findOverlay;
  private _find;
  private keydownHandler;
  private pendingTap;
  private pendingClick;
  private resizeDrag;
  private commentPopup;
  private commentMap;
  private hyperlinkMap;
  private commentPopupKey;
  private commentPopupTimer;
  private validationPanel;
  private validationPanelKey;
  private validationRequestGeneration;
  private validationArrowRect;
  private validationOutsideHandler;
  constructor(container: HTMLElement, opts: XlsxViewerOptions | XlsxSheetViewerOptions | undefined, mount: XlsxViewerMount);
  private _collectSheetCells;
  load(source: string | ArrayBuffer): Promise<void>;
  private activateWorkbook;
  private ensureHostFonts;
  private releaseHostFonts;
  private prepareWorkbook;
  private get workbook();
  private get wb();
  private set wb(value);
  showSheet(index: number): Promise<void>;
  private isCurrentSheetRequest;
  private buildOutline;
  private layoutGutters;
  private renderGutters;
  private paintAxisGutter;
  private drawToggleBox;
  private drawLevelButton;
  private paintCornerGutter;
  private onGutterPointerDown;
  private applyGroupToggle;
  private applyLevelButton;
  private setBandHidden;
  private recordSizeOverride;
  private wireSizeOverrides;
  private setBandCollapsed;
  private afterOutlineMutation;
  private buildOutlineLayoutOnly;
  private get isRtl();
  private updateFooterDirection;
  private get maxScrollLeft();
  private get maxScrollTop();
  private syncNativeViewportExtent;
  private get viewportTop();
  private set viewportTop(value);
  private get effectiveScrollLeft();
  private setViewportLeft;
  private screenX;
  private resetHorizontalScroll;
  private reanchorHorizontalScroll;
  get sheetIndex(): number;
  get sheetCount(): number;
  goToSheet(index: number): Promise<void>;
  nextSheet(): Promise<void>;
  prevSheet(): Promise<void>;
  getViewportOffset(): XlsxViewportOffset;
  private emitViewportChange;
  setViewportOffset(offset: XlsxViewportOffset): Promise<void>;
  relayout(): Promise<void>;
  scrollToCell(ref: string, options?: XlsxScrollToCellOptions): Promise<void>;
  private _stepSheet;
  private _initialSheet;
  getCellAt(clientX: number, clientY: number): CellAddress | null;
  private getCellRect;
  get selection(): CellRange | null;
  select(ref: string): void;
  private getHeaderHit;
  private getResizeTarget;
  private applyResize;
  setSelectionColor(color: string): void;
  setHiddenSheetMode(mode: HiddenSheetMode): Promise<void>;
  get hiddenSheetMode(): HiddenSheetMode;
  get visibleSheetCount(): number;
  private copySelection;
  private updateSelectionOverlay;
  private maybeDrawValidationDropdown;
  private updateFindOverlay;
  findText(query: string, opts?: FindMatchesOptions): Promise<FindMatch<XlsxMatchLocation>[]>;
  findNext(): Promise<FindMatch<XlsxMatchLocation> | null>;
  findPrev(): Promise<FindMatch<XlsxMatchLocation> | null>;
  clearFind(): void;
  private _activateMatch;
  private _scrollCellIntoView;
  private toggleValidationPanel;
  private openValidationPanel;
  private isCurrentValidationRequest;
  private renderValidationPanel;
  private positionValidationPanel;
  private installValidationOutsideHandler;
  private hideValidationPanel;
  private buildCommentMap;
  private buildHyperlinkMap;
  private hyperlinkAtCell;
  private dispatchHyperlink;
  private navigateInternalHyperlink;
  private scheduleCommentPopup;
  private renderCommentPopup;
  private hideCommentPopup;
  private applyPointerSelection;
  private setupSelectionEvents;
  private buildTabs;
  private makeNavButton;
  private navButtonStyle;
  private scrollTabs;
  private updateNavButtons;
  private updateTabActive;
  private tabStyle;
  private tabCss;
  private buildZoomControl;
  private zoomPosToScale;
  private zoomScaleToPos;
  setScale(scale: number): void;
  getScale(): number;
  zoomIn(): void;
  zoomOut(): void;
  fitWidth(): void;
  fitPage(): void;
  private _fit;
  private _naturalContentExtent;
  private updateSpacerSize;
  private scheduleRender;
  private renderCurrentSheet;
  private _reportRenderError;
  private _renderCurrentSheet;
  private computeHeaderHighlight;
  get sheetNames(): string[];
  get canvasElement(): HTMLCanvasElement;
  getResourceMetrics(): Promise<OoxmlResourceMetrics>;
  destroy(): void;
  private assertOpen;
  private destroyedError;
}
declare class XlsxViewer extends XlsxViewerEngine {
  static fromWorkbook(container: HTMLElement, workbook: XlsxWorkbook, opts?: Omit<XlsxViewerOptions, keyof LoadOptions$1>): Omit<XlsxViewer, 'load'>;
  constructor(container: HTMLElement, opts?: XlsxViewerOptions);
}
declare class XlsxSheetViewer implements ZoomableViewer {
  readonly canvasElement: HTMLCanvasElement;
  private readonly engine;
  private readonly canvasMount;
  private destroyed;
  private snapshot;
  private lastMetrics;
  static fromWorkbook(canvasElement: HTMLCanvasElement, workbook: XlsxWorkbook, options?: Omit<XlsxSheetViewerOptions, keyof LoadOptions$1>): Omit<XlsxSheetViewer, 'load'>;
  constructor(canvasElement: HTMLCanvasElement, options?: XlsxSheetViewerOptions);
  load(source: string | ArrayBuffer): Promise<void>;
  get sheetIndex(): number;
  get sheetCount(): number;
  get sheetNames(): string[];
  goToSheet(index: number): Promise<void>;
  nextSheet(): Promise<void>;
  prevSheet(): Promise<void>;
  getViewportOffset(): XlsxViewportOffset;
  setViewportOffset(offset: XlsxViewportOffset): Promise<void>;
  scrollToCell(ref: string, options?: XlsxScrollToCellOptions): Promise<void>;
  relayout(): Promise<void>;
  getScale(): number;
  setScale(scale: number): void;
  zoomIn(): void;
  zoomOut(): void;
  fitWidth(): void;
  fitPage(): void;
  getCellAt(clientX: number, clientY: number): CellAddress | null;
  get selection(): CellRange | null;
  select(ref: string): void;
  setSelectionColor(color: string): void;
  setHiddenSheetMode(mode: HiddenSheetMode): Promise<void>;
  get hiddenSheetMode(): HiddenSheetMode;
  get visibleSheetCount(): number;
  findText(query: string, options?: FindMatchesOptions): Promise<FindMatch<XlsxMatchLocation>[]>;
  findNext(): Promise<FindMatch<XlsxMatchLocation> | null>;
  findPrev(): Promise<FindMatch<XlsxMatchLocation> | null>;
  clearFind(): void;
  getResourceMetrics(): Promise<OoxmlResourceMetrics>;
  destroy(): void;
  private captureSnapshot;
  private assertOpen;
  private destroyedError;
}
declare function resolveSharedStrings(ws: Worksheet, sharedStrings: SharedString[]): Worksheet;
//#endregion
export { type AutoResizeOptions, type Border, type BorderEdge, type Cell, type CellAddress, type CellFill, type CellFont, type CellRange, type CellValue, type CellXf, type CfIcon, type CfRule, type CfStop, type CfValue, type ChartAnchor, type ChartDataLabelOverride, type ChartDataPointOverride, type ChartErrBars, type ChartManualLayout, type ChartModel, type ChartSeries, type ChartSeriesDataLabels, type ConditionalFormat, type DataLabelOverride, type DataPointOverride, type DataValidation, type DefinedName, type Duotone, type Dxf, type ErrBars, type FindHighlightColors, type FindMatch, type FindMatchesOptions, type GradientFillSpec, type HiddenSheetMode, type Hyperlink, type HyperlinkTarget, type ImageAnchor, type LegendManualLayout, type LoadOptions, type ManualLayout, type MergeCell, type NumFmt, OoxmlDecodedImageLimitError, type OoxmlDecodedImageLimitMetric, OoxmlError, type OoxmlErrorCode, type OoxmlErrorSource, type OoxmlErrorStage, type OoxmlFormat, type OoxmlResourceLimit, OoxmlResourceLimitError, type OoxmlResourceLimitErrorDetails, type OoxmlResourceLimits, type OoxmlResourceMetric, type OoxmlResourceMetrics, type OoxmlResourceMetricsCheckpoint, type OoxmlResourceName, type OoxmlResourcePolicySnapshot, type OoxmlResourceUsageSnapshot, type OoxmlResourceViolation, type OutlinePr, type ParsedWorkbook, type PathCmd, type PathInfo, type PhoneticAlignment, type PhoneticProperties, type PhoneticRun, type PhoneticType, type PivotCacheSource, type PivotDataField, type PivotDiagnostic, type PivotLocation, type PivotMetadataStatus, type PivotPageField, type PivotPartialReason, type PivotTableMetadata, type RenderViewportOptions, type ResolvedList, type Row, type Run, type RunFont, type SelectionMode, type SeriesDataLabels, type ShapeAnchor, type ShapeGeom, type ShapeInfo, type ShapeParagraph, type ShapeText, type ShapeTextRun, type SharedString, type SheetMeta, type SheetVisibility, type SlicerAnchor, type SlicerElementStyle, type SlicerItem, type SlicerStyle, type Sparkline, type SparklineGroup, type Styles, type TableColumnInfo, type TableInfo, type ViewportRange, type WireRenderViewportOptions, type WireSizeOverrides, type Workbook, type Worksheet, type XlsxChartSeries, type XlsxComment, type XlsxMatchLocation, type XlsxScrollToCellOptions, XlsxSheetViewer, type XlsxSheetViewerOptions, type XlsxTextRunInfo, XlsxViewer, type XlsxViewerOptions, type XlsxViewportOffset, XlsxWorkbook, autoResize, isOoxmlDecodedImageLimitError, openExternalHyperlink, resolveSharedStrings };