import { Category } from "../enum/category.enum";

export interface Sentence{
    lang?: string;
    content?: string;
    createdUser?: string;
    translatedContent?: string;
    category?: Category;
    level?: number;
}