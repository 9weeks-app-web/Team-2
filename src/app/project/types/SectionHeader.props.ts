interface SectionHeaderProps {
  headerText1?: string;
  headerText2: string;
  seeMoreHref: string;
  categoryList?: Category[];
  currentPage?: number;
  totalPage?: number;
  filterList?: Filter[];
  isSort?: boolean;
  onCategoryChange?: (category: string) => void;
  goToNextPage?: () => void;
  goToPrevPage?: () => void;
}
