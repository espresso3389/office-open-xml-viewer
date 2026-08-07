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
interface Duotone {
  clr1: string;
  clr2: string;
}
interface FillRect {
  l?: number;
  t?: number;
  r?: number;
  b?: number;
}
interface TileInfo {
  tx: number;
  ty: number;
  sx: number;
  sy: number;
  flip: string;
  algn?: string;
}
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
interface MatchRunSlice {
  runIndex: number;
  start: number;
  end: number;
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
//#region dist/.types-work/docx-C5SBoWU-.d.ts
interface DocxDocumentModel {
  section: SectionProps;
  body: BodyElement[];
  headers: HeadersFooters;
  footers: HeadersFooters;
  majorFont?: string;
  minorFont?: string;
  fontFamilyClasses?: Record<string, string>;
  fontFamilyPitches?: Record<string, string>;
  embeddedFonts?: EmbeddedFontRef[];
  revisions?: DocRevision[];
  comments?: DocComment[];
  footnotes?: DocNote[];
  endnotes?: DocNote[];
  settings?: DocSettings;
  parseError?: string;
}
interface EmbeddedFontRef {
  fontName: string;
  style: 'regular' | 'bold' | 'italic' | 'boldItalic';
  partPath: string;
  fontKey: string;
}
interface DocSettings {
  kinsoku?: boolean;
  noLineBreaksBefore?: string;
  noLineBreaksAfter?: string;
  mathDefJc?: string;
  defaultTabStop?: number;
  characterSpacingControl?: string;
  useFeLayout?: boolean;
  balanceSingleByteDoubleByteWidth?: boolean;
  adjustLineHeightInTable?: boolean;
}
interface DocRevision {
  kind: 'insertion' | 'deletion' | string;
  author?: string;
  date?: string;
  text: string;
}
interface DocComment {
  id: string;
  author?: string;
  initials?: string;
  date?: string;
  text: string;
}
interface DocNote {
  id: string;
  content: BodyElement[];
}
declare function noteText(note: DocNote): string;
interface HeadersFooters {
  default: HeaderFooter | null;
  first: HeaderFooter | null;
  even: HeaderFooter | null;
}
interface HeaderFooter {
  body: BodyElement[];
}
interface PageNumType {
  start?: number;
  fmt?: string;
}
interface PageBorders {
  offsetFrom: string;
  display: string;
  zOrder: string;
  top?: PageBorderEdge;
  bottom?: PageBorderEdge;
  left?: PageBorderEdge;
  right?: PageBorderEdge;
}
interface PageBorderEdge {
  style: string;
  color?: string;
  width: number;
  space: number;
}
interface LineNumbering {
  countBy: number;
  start: number;
  distance?: number;
  restart: string;
}
interface SectionGeom {
  pageWidth: number;
  pageHeight: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  headerDistance: number;
  footerDistance: number;
}
interface SectionProps {
  pageWidth: number;
  pageHeight: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  headerDistance: number;
  footerDistance: number;
  titlePage: boolean;
  evenAndOddHeaders: boolean;
  sectionStart?: string | null;
  textDirection?: string | null;
  docGridType?: string | null;
  docGridLinePitch?: number | null;
  docGridCharSpace?: number | null;
  columns?: ColumnsSpec | null;
  pageNumType?: PageNumType | null;
  pageBorders?: PageBorders | null;
  lineNumbering?: LineNumbering | null;
  vAlign?: string | null;
}
interface ColumnsSpec {
  count: number;
  spacePt: number;
  equalWidth: boolean;
  sep: boolean;
  cols: ColSpec[];
}
interface ColSpec {
  widthPt: number;
  spacePt: number;
}
type BodyElement = ({
  type: 'paragraph';
} & DocParagraph) | ({
  type: 'table';
} & DocTable) | {
  type: 'pageBreak';
  parity?: 'odd' | 'even';
  sameParagraphAsPrevious?: boolean;
} | {
  type: 'columnBreak';
} | {
  type: 'sectionBreak';
  kind: 'continuous' | 'nextPage' | 'oddPage' | 'evenPage' | string;
  columns?: ColumnsSpec | null;
  headers?: HeadersFooters;
  footers?: HeadersFooters;
  titlePage?: boolean;
  geom?: SectionGeom;
  pageNumType?: PageNumType | null;
  textDirection?: string | null;
};
interface DocParagraph {
  paragraphId?: string;
  alignment: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | 'both' | 'distribute' | 'lowKashida' | 'mediumKashida' | 'highKashida' | 'thaiDistribute' | string;
  indentLeft: number;
  indentRight: number;
  indentFirst: number;
  spaceBefore: number;
  spaceAfter: number;
  lineSpacing: LineSpacing | null;
  numbering: NumberingInfo | null;
  tabStops: TabStop[];
  runs: DocRun[];
  bookmarks?: string[];
  shading?: string | null;
  pageBreakBefore?: boolean;
  contextualSpacing?: boolean;
  keepNext?: boolean;
  keepLines?: boolean;
  markVanish?: boolean;
  widowControl?: boolean;
  overflowPunct?: boolean;
  borders?: ParagraphBorders | null;
  styleId?: string | null;
  defaultFontSize?: number;
  defaultFontFamily?: string | null;
  defaultFontFamilyEastAsia?: string | null;
  paragraphMarkColor?: string | null;
  bidi?: boolean;
  snapToGrid?: boolean;
  framePr?: FramePr;
}
interface FramePr {
  dropCap: 'none' | 'drop' | 'margin' | string;
  lines: number;
  wrap: 'around' | 'auto' | 'none' | 'notBeside' | 'through' | 'tight' | string;
  hAnchor: 'text' | 'margin' | 'page' | string;
  vAnchor: 'text' | 'margin' | 'page' | string;
  hRule: 'auto' | 'atLeast' | 'exact' | string;
  hSpace: number;
  vSpace: number;
  w?: number;
  h?: number;
  x?: number;
  y?: number;
  xAlign?: 'left' | 'center' | 'right' | 'inside' | 'outside' | string;
  yAlign?: 'inline' | 'top' | 'center' | 'bottom' | 'inside' | 'outside' | string;
}
interface ParagraphBorders {
  top: ParaBorderEdge | null;
  bottom: ParaBorderEdge | null;
  left: ParaBorderEdge | null;
  right: ParaBorderEdge | null;
  between: ParaBorderEdge | null;
}
interface ParaBorderEdge {
  style: string;
  color: string | null;
  width: number;
  space: number;
}
interface DocxRunBorder {
  style: string;
  color?: string | null;
  width: number;
  space: number;
}
interface TabStop {
  pos: number;
  alignment: 'left' | 'start' | 'center' | 'right' | 'end' | 'decimal' | 'bar' | 'clear' | 'num';
  leader: 'none' | 'dot' | 'hyphen' | 'underscore' | 'heavy' | 'middleDot';
}
interface LineSpacing {
  value: number;
  rule: 'auto' | 'exact' | 'atLeast';
  explicit?: boolean;
}
interface NumberingInfo {
  numId: number;
  level: number;
  format: string;
  text: string;
  indentLeft: number;
  tab: number;
  suff: string;
  jc?: string;
  fontFamily?: string | null;
  fontFamilyEastAsia?: string | null;
  color?: string | null;
  colorAuto?: boolean;
  picBulletImagePath?: string;
  picBulletMimeType?: string;
  picBulletWidthPt?: number;
  picBulletHeightPt?: number;
}
type DocRun = ({
  type: 'text';
} & DocxTextRun) | ({
  type: 'anchorHost';
} & AnchorHostMetrics) | ({
  type: 'image';
} & ImageRun) | ({
  type: 'chart';
} & ChartRun) | {
  type: 'break';
  breakType: 'line' | 'page' | 'column';
} | ({
  type: 'field';
} & FieldRun) | ({
  type: 'shape';
} & ShapeRun) | {
  type: 'math';
  nodes: MathNode[];
  display: boolean;
  fontSize: number;
  jc?: string;
} | ({
  type: 'ptab';
} & PTabRun);
interface ChartRun {
  chart: ChartModel;
  widthPt: number;
  heightPt: number;
  anchor: boolean;
  anchorXPt?: number;
  anchorYPt?: number;
  anchorXFromMargin?: boolean;
  anchorYFromPara?: boolean;
  wrapMode?: string;
  distTop?: number;
  distBottom?: number;
  distLeft?: number;
  distRight?: number;
  wrapSide?: string;
  allowOverlap?: boolean;
  anchorXAlign?: string | null;
  anchorYAlign?: string | null;
  anchorXRelativeFrom?: string | null;
  anchorYRelativeFrom?: string | null;
}
interface PTabRun {
  alignment: 'left' | 'center' | 'right';
  relativeTo: 'margin' | 'indent';
  leader: 'none' | 'dot' | 'hyphen' | 'underscore' | 'middleDot';
  fontSize: number;
}
type PathCmd = {
  cmd: 'moveTo';
  x: number;
  y: number;
} | {
  cmd: 'lineTo';
  x: number;
  y: number;
} | {
  cmd: 'cubicBezTo';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x: number;
  y: number;
} | {
  cmd: 'arcTo';
  wr: number;
  hr: number;
  stAng: number;
  swAng: number;
} | {
  cmd: 'close';
};
interface AnchorHostMetrics {
  fontSize: number;
  fontFamily?: string | null;
  fontFamilyEastAsia?: string | null;
  bold?: boolean;
  italic?: boolean;
}
interface ShapeRun {
  inline?: boolean;
  widthPt: number;
  heightPt: number;
  anchorXPt: number;
  anchorYPt: number;
  anchorXFromMargin: boolean;
  anchorYFromPara: boolean;
  anchorXAlign?: string | null;
  anchorYAlign?: string | null;
  pctPosH?: number | null;
  pctPosV?: number | null;
  anchorXRelativeFrom?: string | null;
  anchorYRelativeFrom?: string | null;
  widthPct?: number | null;
  heightPct?: number | null;
  widthRelativeFrom?: string | null;
  heightRelativeFrom?: string | null;
  groupWidthPt?: number | null;
  groupHeightPt?: number | null;
  behindDoc?: boolean;
  zOrder: number;
  subpaths: PathCmd[][];
  presetGeometry?: string | null;
  adjValues?: Array<number | null>;
  fill: ShapeFill | null;
  stroke: string | null;
  strokeWidth?: number;
  strokeDash?: string | null;
  strokeCap?: CanvasLineCap | null;
  headEnd?: LineEnd | null;
  tailEnd?: LineEnd | null;
  rotation?: number;
  flipH?: boolean;
  flipV?: boolean;
  wrapMode?: string | null;
  distTop?: number;
  distBottom?: number;
  distLeft?: number;
  distRight?: number;
  wrapSide?: string | null;
  textBlocks?: ShapeText[];
  defaultTextColor?: string | null;
  textAnchor?: string | null;
  textAutofit?: string | null;
  textInsetL?: number;
  textInsetT?: number;
  textInsetR?: number;
  textInsetB?: number;
  textVert?: string | null;
  textPath?: TextPath | null;
  fillOpacity?: number | null;
}
interface TextPath {
  string: string;
  fontFamily?: string | null;
  bold?: boolean;
  italic?: boolean;
}
interface LineEnd {
  type: string;
  w: string;
  len: string;
}
interface ShapeTextRun {
  text: string;
  fontSizePt: number;
  color?: string | null;
  fontFamily?: string | null;
  fontFamilyEastAsia?: string | null;
  bold?: boolean;
  italic?: boolean;
  ruby?: RubyAnnotation | null;
}
interface ShapeText {
  text: string;
  fontSizePt: number;
  color?: string | null;
  paragraphMarkColor?: string | null;
  fontFamily?: string | null;
  bold?: boolean;
  italic?: boolean;
  runs?: ShapeTextRun[];
  numbering?: NumberingInfo | null;
  alignment: string;
  spaceBefore?: number;
  spaceAfter?: number;
  lineSpacingVal?: number;
  lineSpacingRule?: string;
  indentLeft?: number;
  indentRight?: number;
  indentFirst?: number;
  tabStops?: TabStop[];
  bidi?: boolean;
  contextualSpacing?: boolean;
  styleId?: string | null;
  imagePath?: string;
  mimeType?: string;
  svgImagePath?: string;
  imageWidthPt?: number;
  imageHeightPt?: number;
}
type ShapeFill = {
  fillType: 'solid';
  color: string;
} | {
  fillType: 'gradient';
  stops: GradientStop[];
  angle: number;
  gradType: string;
} | {
  fillType: 'image';
  imagePath: string;
  mimeType: string;
  svgImagePath?: string;
  srcRect?: {
    l: number;
    t: number;
    r: number;
    b: number;
  };
  fillRect?: FillRect;
  tile?: TileInfo;
  alpha?: number;
  duotone?: Duotone;
};
interface GradientStop {
  position: number;
  color: string;
}
interface FieldRun {
  fieldType: string;
  instruction: string;
  fallbackText: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
  fontSize: number;
  color: string | null;
  fontFamily: string | null;
  background: string | null;
  vertAlign: 'super' | 'sub' | null;
  allCaps?: boolean;
  smallCaps?: boolean;
  doubleStrikethrough?: boolean;
  highlight?: string | null;
  emphasisMark?: EmphasisMark;
}
interface DocxTextRun {
  text: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  underlineStyle?: string;
  underlineColor?: string;
  strikethrough: boolean;
  fontSize: number;
  color: string | null;
  fontFamily: string | null;
  fontFamilyEastAsia?: string | null;
  isLink: boolean;
  background: string | null;
  colorAuto?: boolean | null;
  border?: DocxRunBorder | null;
  vertAlign: 'super' | 'sub' | null;
  hyperlink: string | null;
  hyperlinkAnchor?: string | null;
  allCaps?: boolean;
  smallCaps?: boolean;
  doubleStrikethrough?: boolean;
  highlight?: string | null;
  emphasisMark?: EmphasisMark;
  ruby?: RubyAnnotation;
  revision?: RunRevision;
  rtl?: boolean;
  cs?: boolean;
  fontFamilyCs?: string;
  fontSizeCs?: number;
  boldCs?: boolean;
  italicCs?: boolean;
  langBidi?: string;
  snapToGrid?: boolean;
  charSpacing?: number;
  fitTextVal?: number;
  fitTextId?: string | number;
  charScale?: number;
  position?: number;
  kerning?: number;
  eastAsianVert?: boolean;
  eastAsianVertCompress?: boolean;
  eastAsianCombine?: boolean;
  eastAsianCombineBrackets?: string;
  noteRef?: NoteRef;
}
interface NoteRef {
  kind: 'footnote' | 'endnote' | string;
  id: string;
}
interface RunRevision {
  kind: 'insertion' | 'deletion' | string;
  author?: string;
  date?: string;
}
interface RubyAnnotation {
  text: string;
  fontSizePt: number;
  hpsRaisePt?: number;
}
type EmphasisMark = 'dot' | 'comma' | 'circle' | 'underDot';
interface ImageRun {
  imagePath: string;
  mimeType: string;
  svgImagePath?: string;
  srcRect?: {
    l: number;
    t: number;
    r: number;
    b: number;
  } | null;
  widthPt: number;
  heightPt: number;
  rotation?: number;
  flipH?: boolean;
  flipV?: boolean;
  anchor?: boolean;
  anchorXPt?: number;
  anchorYPt?: number;
  anchorXFromMargin?: boolean;
  anchorYFromPara?: boolean;
  colorReplaceFrom?: string;
  duotone?: Duotone;
  alpha?: number;
  wrapMode?: string;
  distTop?: number;
  distBottom?: number;
  distLeft?: number;
  distRight?: number;
  wrapSide?: string;
  allowOverlap?: boolean;
  anchorXAlign?: string | null;
  anchorYAlign?: string | null;
  anchorXRelativeFrom?: string | null;
  anchorYRelativeFrom?: string | null;
}
interface TblpPr {
  leftFromText: number;
  rightFromText: number;
  topFromText: number;
  bottomFromText: number;
  horzAnchor: 'text' | 'margin' | 'page' | string;
  horzSpecified: boolean;
  vertAnchor: 'text' | 'margin' | 'page' | string;
  tblpX: number;
  tblpY: number;
  tblpXSpec?: 'left' | 'center' | 'right' | 'inside' | 'outside' | string;
  tblpYSpec?: 'inline' | 'top' | 'center' | 'bottom' | 'inside' | 'outside' | string;
}
interface DocTable {
  colWidths: number[];
  rows: DocTableRow[];
  borders: TableBorders;
  cellMarginTop: number;
  cellMarginBottom: number;
  cellMarginLeft: number;
  cellMarginRight: number;
  jc: string;
  tblInd?: number;
  layout?: string;
  widthPt?: number;
  widthPct?: number;
  bidiVisual?: boolean;
  tblpPr?: TblpPr;
  overlap?: string;
}
interface TableBorders {
  top: BorderSpec | null;
  bottom: BorderSpec | null;
  left: BorderSpec | null;
  right: BorderSpec | null;
  insideH: BorderSpec | null;
  insideV: BorderSpec | null;
}
interface BorderSpec {
  width: number;
  color: string | null;
  style: string;
}
interface DocTableRow {
  cells: DocTableCell[];
  gridBefore?: number;
  gridAfter?: number;
  rowHeight: number | null;
  rowHeightRule: 'auto' | 'atLeast' | 'exact' | string;
  isHeader: boolean;
  cantSplit?: boolean;
}
type CellElement = ({
  type: 'paragraph';
} & DocParagraph) | ({
  type: 'table';
} & DocTable);
interface DocTableCell {
  content: CellElement[];
  colSpan: number;
  vMerge: boolean | null;
  borders: CellBorders;
  background: string | null;
  vAlign: 'top' | 'center' | 'bottom';
  widthPt: number | null;
  widthPct?: number;
  marginTop?: number | null;
  marginBottom?: number | null;
  marginLeft?: number | null;
  marginRight?: number | null;
}
interface CellBorders {
  top: BorderSpec | null;
  bottom: BorderSpec | null;
  left: BorderSpec | null;
  right: BorderSpec | null;
  insideH: BorderSpec | null;
  insideV: BorderSpec | null;
}
interface RenderPageOptions {
  width?: number;
  dpr?: number;
  defaultTextColor?: string;
  onTextRun?: (run: {
    text: string;
    x: number;
    y: number;
    w: number;
    h: number;
    fontSize: number;
    font: string;
    transform?: string;
  }) => void;
  showTrackChanges?: boolean;
  currentDate?: Date | number;
}
interface DocxTextRunInfo {
  paragraphId?: string;
  text: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fontSize: number;
  font: string;
  letterSpacingPx?: number;
  transform?: string;
  hyperlink?: HyperlinkTarget;
  eastAsianVert?: boolean;
}
type WireRenderPageOptions = Omit<RenderPageOptions, 'onTextRun'>;
interface LoadOptions extends LoadOptions$1 {
  math?: MathRenderer;
  mode?: 'main' | 'worker';
}
type RenderPageToBitmapOptions = WireRenderPageOptions & {
  onTextRun?: (run: DocxTextRunInfo) => void;
};
declare class DocxDocument {
  private _metrics;
  private _document;
  private _source;
  private _meta;
  private _bookmarkPages;
  private _mode;
  private _worker;
  private _bridge;
  private readonly _rawParts;
  private _embeddedFontFaces;
  private _googleFontFaces;
  private _localMetricFontFaces;
  private readonly _fetchImage;
  private constructor();
  static load(source: string | ArrayBuffer, opts?: LoadOptions): Promise<DocxDocument>;
  private _parse;
  destroy(): void;
  getImage(imagePath: string, mimeType: string): Promise<Blob>;
  getFontBytes(partPath: string): Promise<Uint8Array>;
  private _resourceUsage;
  getResourceMetrics(): Promise<OoxmlResourceMetrics>;
  toMarkdown(): Promise<string>;
  get pageCount(): number;
  get mode(): 'main' | 'worker';
  get document(): DocxDocumentModel;
  get comments(): DocComment[];
  get footnotes(): DocNote[];
  get endnotes(): DocNote[];
  private _getLayout;
  private _getBookmarkPages;
  getBookmarkPage(bookmarkName: string): number | undefined;
  pageSize(pageIndex: number): {
    widthPt: number;
    heightPt: number;
  };
  renderPage(target: HTMLCanvasElement | OffscreenCanvas, pageIndex: number, opts?: RenderPageOptions): Promise<void>;
  renderPageToBitmap(pageIndex: number, opts?: RenderPageToBitmapOptions): Promise<ImageBitmap>;
  collectPageRuns(pageIndex: number, opts?: WireRenderPageOptions): Promise<DocxTextRunInfo[]>;
}
interface DocxMatchLocation {
  page: number;
}
interface DocxViewerOptions extends RenderPageOptions, LoadOptions {
  container?: HTMLElement;
  enableTextSelection?: boolean;
  findHighlightColors?: FindHighlightColors;
  onPageChange?: (index: number, total: number) => void;
  zoomMin?: number;
  zoomMax?: number;
  onScaleChange?: (scale: number) => void;
  onHyperlinkClick?: (target: HyperlinkTarget) => void;
  enableHyperlinks?: boolean;
  onError?: (err: Error) => void;
}
declare class DocxViewer implements ZoomableViewer {
  private readonly _documentOwner;
  private get _doc();
  private readonly _borrowed;
  private readonly _hostWindow;
  private _currentPage;
  private _scale;
  private _canvas;
  private _wrapper;
  private readonly _canvasMount;
  private _textLayer;
  private _highlightLayer;
  private _find;
  private _measureCtx;
  private _opts;
  private readonly _mode;
  private readonly _renderDispatcher;
  private readonly _errorRouter;
  private _destroyed;
  static fromDocument(canvas: HTMLCanvasElement, document: DocxDocument, opts?: Omit<DocxViewerOptions, keyof LoadOptions>): Omit<DocxViewer, 'load'>;
  constructor(canvas: HTMLCanvasElement, opts?: DocxViewerOptions);
  load(source: string | ArrayBuffer): Promise<void>;
  get pageCount(): number;
  get currentPage(): number;
  get canvasElement(): HTMLCanvasElement;
  goToPage(index: number): Promise<void>;
  nextPage(): Promise<void>;
  prevPage(): Promise<void>;
  private _naturalWidthPx;
  private _renderWidth;
  getScale(): number;
  private _zoomMin;
  private _zoomMax;
  setScale(scale: number): Promise<void>;
  zoomIn(): Promise<void>;
  zoomOut(): Promise<void>;
  fitWidth(): Promise<void>;
  fitPage(): Promise<void>;
  private _fit;
  private _fitContainer;
  findText(query: string, opts?: FindMatchesOptions): Promise<FindMatch<DocxMatchLocation>[]>;
  findNext(): Promise<FindMatch<DocxMatchLocation> | null>;
  findPrev(): Promise<FindMatch<DocxMatchLocation> | null>;
  clearFind(): void;
  private _activateMatch;
  private _redrawHighlights;
  getResourceMetrics(): Promise<OoxmlResourceMetrics>;
  destroy(): void;
  private _render;
  private _reportRenderError;
  private _renderPage;
  private _buildHighlightLayer;
  private _canvasCssPx;
  private _measureForFont;
  private _collectPageRuns;
  private _buildTextLayer;
  private _hyperlinkHandler;
}
interface DocxScrollViewerOptions extends Omit<RenderPageOptions, 'onTextRun'>, LoadOptions {
  width?: number;
  gap?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  overscan?: number;
  enableTextSelection?: boolean;
  findHighlightColors?: FindHighlightColors;
  zoomMin?: number;
  zoomMax?: number;
  enableZoom?: boolean;
  refitOnResize?: boolean;
  background?: string;
  pageShadow?: string | false;
  onVisiblePageChange?: (topIndex: number, total: number) => void;
  onScaleChange?: (scale: number) => void;
  onHyperlinkClick?: (target: HyperlinkTarget) => void;
  enableHyperlinks?: boolean;
  onError?: (err: Error) => void;
}
declare class DocxScrollViewer implements ZoomableViewer {
  private readonly _documentOwner;
  private get _doc();
  private readonly _borrowed;
  private readonly _opts;
  private readonly _container;
  private readonly _wrapper;
  private readonly _scrollHost;
  private readonly _spacer;
  private _mode;
  private _scale;
  private _scaleEstablished;
  private _pendingScale;
  private readonly _slots;
  private readonly _free;
  private _heights;
  private _lastRange;
  private _lastTopIndex;
  private _scrollListener;
  private _destroyed;
  private _measureCtx;
  private readonly _bitmapInFlight;
  private _renderEpoch;
  private _settleTimer;
  private _wheelListener;
  private _pendingZoomAnchor;
  private _resizeObserver;
  private _prevBase;
  private _lastFitWidth;
  private readonly _pageShadow;
  private readonly _find;
  private _findActive;
  static fromDocument(container: HTMLElement, document: DocxDocument, opts?: Omit<DocxScrollViewerOptions, keyof LoadOptions>): Omit<DocxScrollViewer, 'load'>;
  constructor(container: HTMLElement, opts?: DocxScrollViewerOptions);
  load(source: string | ArrayBuffer): Promise<void>;
  get pageCount(): number;
  private _pageWidthPx;
  private _pageHeightPx;
  private _fitWidthPx;
  private _baseScale;
  relayout(): void;
  private _recomputeHeights;
  private _gap;
  private _overscan;
  private _pad;
  private _padH;
  private _pageIndexAtOffset;
  private _range;
  private _syncSpacer;
  private _syncSpacerWidth;
  private _onScroll;
  private _mountVisible;
  private _applyPageShadow;
  private _acquireSlot;
  private _recycleSlot;
  private _positionSlot;
  private _dpr;
  private _renderSlot;
  private _hyperlinkHandler;
  private _measureForFont;
  private _canvasCssPx;
  private _reportRenderError;
  private _renderSlotBitmap;
  setScale(scale: number): void;
  getScale(): number;
  zoomIn(): void;
  zoomOut(): void;
  fitWidth(): void;
  fitPage(): void;
  private _fit;
  private _previewVisible;
  private _previewSlot;
  private _scheduleSettle;
  private _settleRender;
  private _settleSlot;
  scrollToPage(index: number, opts?: {
    behavior?: 'auto' | 'smooth';
  }): void;
  findText(query: string, opts?: FindMatchesOptions): Promise<FindMatch<DocxMatchLocation>[]>;
  findNext(): Promise<FindMatch<DocxMatchLocation> | null>;
  findPrev(): Promise<FindMatch<DocxMatchLocation> | null>;
  clearFind(): void;
  private _activateMatch;
  private _collectPageRuns;
  private _redrawHighlights;
  private _refreshFindRuns;
  private _redrawSlotHighlights;
  private _onResize;
  get topVisiblePage(): number;
  getResourceMetrics(): Promise<OoxmlResourceMetrics>;
  destroy(): void;
}
declare function buildDocxTextLayer(layer: HTMLDivElement, runs: DocxTextRunInfo[], cssWidth: number, cssHeight: number, onHyperlinkClick?: (target: HyperlinkTarget) => void, measureForFont?: (font: string) => (s: string) => number): void;
interface DocxHighlightMatch {
  slices: MatchRunSlice[];
  active: boolean;
}
type DocxHighlightColors = FindHighlightColors;
declare function buildDocxHighlightLayer(layer: HTMLDivElement, runs: DocxTextRunInfo[], matches: DocxHighlightMatch[], cssWidth: number, cssHeight: number, measureForFont: (font: string) => (s: string) => number, colors?: DocxHighlightColors): void;
//#endregion
export { type AnchorHostMetrics, type AutoResizeOptions, type BodyElement, type BorderSpec, type CellBorders, type CellElement, type ChartRun, type ColSpec, type ColumnsSpec, type DocComment, type DocNote, type DocParagraph, type DocRevision, type DocRun, type DocSettings, type DocTable, type DocTableCell, type DocTableRow, DocxDocument, type DocxDocumentModel, type DocxHighlightColors, type DocxHighlightMatch, type DocxMatchLocation, type DocxRunBorder, DocxScrollViewer, type DocxScrollViewerOptions, type DocxTextRun, type DocxTextRunInfo, DocxViewer, type DocxViewerOptions, type EmbeddedFontRef, type FieldRun, type FindHighlightColors, type FindMatch, type FindMatchesOptions, type FramePr, type GradientStop, type HeaderFooter, type HeadersFooters, type HyperlinkTarget, type ImageRun, type LineEnd, type LineNumbering, type LineSpacing, type LoadOptions, type NoteRef, type NumberingInfo, OoxmlDecodedImageLimitError, type OoxmlDecodedImageLimitMetric, OoxmlError, type OoxmlErrorCode, type OoxmlErrorSource, type OoxmlErrorStage, type OoxmlFormat, type OoxmlResourceLimit, OoxmlResourceLimitError, type OoxmlResourceLimitErrorDetails, type OoxmlResourceLimits, type OoxmlResourceMetric, type OoxmlResourceMetrics, type OoxmlResourceMetricsCheckpoint, type OoxmlResourceName, type OoxmlResourcePolicySnapshot, type OoxmlResourceUsageSnapshot, type OoxmlResourceViolation, type PTabRun, type PageBorderEdge, type PageBorders, type PageNumType, type ParaBorderEdge, type ParagraphBorders, type PathCmd, type RenderPageOptions, type RenderPageToBitmapOptions, type RubyAnnotation, type RunRevision, type SectionGeom, type SectionProps, type ShapeRun, type ShapeText, type ShapeTextRun, type TabStop, type TableBorders, type TblpPr, type TextPath, type WireRenderPageOptions, autoResize, buildDocxHighlightLayer, buildDocxTextLayer, isOoxmlDecodedImageLimitError, noteText, openExternalHyperlink };