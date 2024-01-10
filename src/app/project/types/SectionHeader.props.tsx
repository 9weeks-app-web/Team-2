import { RecoilState } from "recoil";

export interface SectionHeaderProps {
  headerText1?: string;
  headerText2: string;
  seeMoreHref: string;
  categoryList?: Category[];
  currentPage?: number;
  totalPage?: number;
  filterList?: Filter[];
  isSort?: boolean;
  isPageNav?: boolean;
  recoilState?: RecoilState<string>;
  onCategoryChange?: (category: string) => void;
  goToNextPage?: () => void;
  goToPrevPage?: () => void;
}
