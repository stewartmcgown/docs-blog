import { Enum } from "../../utils/autoenum"

export const GlyphType = Enum(
    "BULLET", "HOLLOW_BULLET", "SQUARE_BULLET", "NUMBER", "LATIN_UPPER", "LATIN_LOWER", "ROMAN_UPPER", "ROMAN_LOWER"
)

export const ParagraphHeading = Enum("NORMAL","HEADING1","HEADING2","HEADING3","HEADING4","HEADING5","HEADING6","TITLE","SUBTITLE")