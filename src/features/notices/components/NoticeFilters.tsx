import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useNoticeStore } from '../store/NoticeStoreContext';
import { 
  Wrapper, 
  CardContainer, 
  FilterGroup, 
  SearchFilterGroup, 
  Label,
  StyledTextField,
  SearchButton
} from './NoticeFilters.styles';

export const NoticeFilters = observer(function NoticeFilters() {
  const { ui, domain } = useNoticeStore();
  const [localSearch, setLocalSearch] = useState(ui.searchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    ui.setSearchQuery(localSearch);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    ui.setCategoryFilter(val === 'All Categories' || val === 'all' ? null : val);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ui.setYearFilter(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ui.setSortFilter(e.target.value as 'newest' | 'oldest');
  };

  const currentYear = new Date().getFullYear();
  const years = ['All Years', currentYear.toString(), (currentYear - 1).toString(), (currentYear - 2).toString()];

  return (
    <Wrapper>
      <CardContainer>
        <SearchFilterGroup>
          <Label>Search Notice</Label>
          <StyledTextField
            variant="outlined"
            placeholder="Search notice..."
            value={localSearch}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            margin="none"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }
            }}
          />
        </SearchFilterGroup>

        <FilterGroup>
          <Label>Category</Label>
          <StyledTextField
            select
            value={ui.categoryFilter || 'All Categories'}
            onChange={handleCategoryChange}
            margin="none"
          >
            <MenuItem value="All Categories">All Categories</MenuItem>
            {domain.categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </MenuItem>
            ))}
          </StyledTextField>
        </FilterGroup>

        <FilterGroup>
          <Label>Year</Label>
          <StyledTextField
            select
            value={ui.yearFilter || 'All Years'}
            onChange={handleYearChange}
            margin="none"
          >
            {years.map((y) => (
              <MenuItem key={y} value={y}>{y}</MenuItem>
            ))}
          </StyledTextField>
        </FilterGroup>

        <FilterGroup>
          <Label>Sort By</Label>
          <StyledTextField
            select
            value={ui.sortFilter}
            onChange={handleSortChange}
            margin="none"
          >
            <MenuItem value="newest">Newest First</MenuItem>
            <MenuItem value="oldest">Oldest First</MenuItem>
          </StyledTextField>
        </FilterGroup>

        <SearchButton 
          variant="contained" 
          color="primary" 
          startIcon={<SearchIcon />}
          onClick={handleSearchSubmit}
        >
          Search
        </SearchButton>
      </CardContainer>
    </Wrapper>
  );
});
