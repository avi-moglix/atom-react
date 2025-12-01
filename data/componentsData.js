// Centralized component data for the Atom Design System
// This eliminates duplication across component pages

export const componentsData = {
  buttons: {
    name: 'Buttons',
    package: '@atom-design-mog/buttons',
    version: '1.0.3',
    description: 'A fully customizable React Native Button component supporting multiple variants, sizes, shapes, icons, loading state, and disabled state. Built with react-native-vector-icons for rich icon support.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/buttons',
    snackId: '@avi-moglix/button-component',
    status: 'popular',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: ['solid', 'outlined', 'dashed', 'text', 'link'],
    propsData: [
      { 
        name: 'title', 
        type: 'string', 
        default: '"Button"', 
        required: false, 
        description: 'The text label displayed on the button. Ignored when type is "icon", "circle", or "square".' 
      },
      { 
        name: 'onPress', 
        type: '() => void', 
        default: '—', 
        required: false, 
        description: 'Callback function triggered when the button is pressed. Disabled when loading or disabled is true.' 
      },
      { 
        name: 'variant', 
        type: '"solid" | "outlined" | "dashed" | "text" | "link"', 
        default: '"solid"', 
        required: false, 
        description: 'Controls the button\'s visual style. "solid" has filled background, "outlined" has border only, "dashed" has dashed border, "text" is transparent, "link" is underlined text.' 
      },
      { 
        name: 'size', 
        type: '"small" | "medium" | "large"', 
        default: '"medium"', 
        required: false, 
        description: 'Controls button padding and font size. Small: 12px font, 8px vertical padding. Medium: 14px font, 12px padding. Large: 16px font, 16px padding.' 
      },
      { 
        name: 'type', 
        type: '"text" | "icon" | "textIcon" | "circle" | "square"', 
        default: '"text"', 
        required: false, 
        description: 'Defines the button layout. "text" shows only title, "icon" shows only icon, "textIcon" shows both with leftIcon/rightIcon, "circle" and "square" are 40x40 icon-only buttons with respective shapes.' 
      },
      { 
        name: 'color', 
        type: 'string', 
        default: '"#d9232d"', 
        required: false, 
        description: 'Primary color for the button. Used as background for "solid" variant, or as border/text color for other variants. Accepts any valid color string (hex, rgb, named).' 
      },
      { 
        name: 'textColor', 
        type: 'string', 
        default: '"#fff"', 
        required: false, 
        description: 'Text and icon color. Only applies to "solid" variant. Other variants automatically use the color prop for text.' 
      },
      { 
        name: 'icon', 
        type: 'string', 
        default: '"help"', 
        required: false, 
        description: 'MaterialIcons icon name for icon-only buttons (type: "icon", "circle", "square"). See react-native-vector-icons MaterialIcons for available names.' 
      },
      { 
        name: 'leftIcon', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'MaterialIcons icon name displayed to the left of the title. Only works with type "text" or "textIcon".' 
      },
      { 
        name: 'rightIcon', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'MaterialIcons icon name displayed to the right of the title. Only works with type "text" or "textIcon".' 
      },
      { 
        name: 'loading', 
        type: 'boolean', 
        default: 'false', 
        required: false, 
        description: 'When true, displays an ActivityIndicator instead of the button content. Automatically disables the button to prevent multiple presses.' 
      },
      { 
        name: 'disabled', 
        type: 'boolean', 
        default: 'false', 
        required: false, 
        description: 'When true, disables button interaction and applies disabled styling (gray background #d7d7dc, reduced opacity 0.6).' 
      },
      { 
        name: '...props', 
        type: 'PressableProps', 
        default: '—', 
        required: false, 
        description: 'Additional props passed to the underlying Pressable component (e.g., accessibilityLabel, testID, style, etc.).' 
      },
    ],
    usageCode: `import AButton from '@atom-design-mog/buttons';

// Basic solid button
<AButton 
  title="Click Me"
  color="#d9232d"
  onPress={() => console.log("Clicked")}
/>

// Button with left icon
<AButton
  title="Add Item"
  leftIcon="add"
  type="textIcon"
  variant="solid"
/>

// Button with right icon
<AButton
  title="Next"
  rightIcon="arrow-forward"
  type="textIcon"
  color="#086AC9"
/>

// Different variants
<AButton title="Solid" variant="solid" />
<AButton title="Outlined" variant="outlined" color="#059A6D" />
<AButton title="Dashed" variant="dashed" color="#E3A003" />
<AButton title="Text Only" variant="text" />
<AButton title="Link Style" variant="link" />

// Different sizes
<AButton title="Small" size="small" />
<AButton title="Medium" size="medium" />
<AButton title="Large" size="large" />

// Icon-only buttons
<AButton type="icon" icon="favorite" color="#d9232d" />
<AButton type="circle" icon="add" color="#086AC9" />
<AButton type="square" icon="settings" color="#3c3c3c" />

// Loading state
<AButton 
  title="Submitting..." 
  loading={true}
  color="#059A6D"
/>

// Disabled button
<AButton 
  title="Disabled" 
  disabled={true}
/>`,
    features: [
      '5 visual variants: solid, outlined, dashed, text, link',
      '3 size options: small, medium, large',
      '5 button types: text, icon, textIcon, circle, square',
      'Left and right icon support via MaterialIcons',
      'Built-in loading state with ActivityIndicator',
      'Disabled state with visual feedback',
      'Fully customizable colors for background and text',
      'Press feedback with opacity animation',
      'Extends Pressable - supports all Pressable props',
    ],
    peerDependencies: [
      { name: 'react-native-vector-icons', note: 'Required for icon support. Uses MaterialIcons icon set.' },
    ],
    dosAndDonts: {
      dos: [
        'Use "solid" variant for primary call-to-action buttons',
        'Provide loading state for async actions to prevent double-clicks',
        'Use appropriate sizes for touch targets (min 44px recommended)',
        'Include accessibilityLabel for icon-only buttons',
        'Use "outlined" or "text" variants for secondary actions',
      ],
      donts: [
        'Don\'t use multiple solid primary buttons in the same view',
        'Avoid using "text" or "link" variants for critical actions',
        'Don\'t forget to handle loading state for async operations',
        'Avoid mixing too many button variants in one component',
      ],
    },
    accessibilityNotes: [
      'Uses Pressable which provides built-in accessibility support',
      'Loading state replaces content with spinner while maintaining button size',
      'Disabled buttons have reduced opacity (0.6) for visual indication',
      'For icon-only buttons, always provide accessibilityLabel prop',
      'Press feedback provides visual confirmation of interaction',
    ],
  },

  input: {
    name: 'Input',
    package: '@atom-design-mog/input',
    version: '1.0.1',
    description: 'A versatile, multi-type Input component for React Native supporting text input, single/multi-select dropdowns, searchable selects, chips/tags, and input with inline button. Features modal-based dropdowns, built-in validation styling, and emoji-based icons.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/input',
    snackId: '@avi-moglix/input-component',
    status: 'popular',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: ['text', 'select', 'multiselect', 'selectWithSearch', 'chips', 'withButton'],
    propsData: [
      { 
        name: 'type', 
        type: '"text" | "select" | "multiselect" | "selectWithSearch" | "chips" | "withButton"', 
        default: '"text"', 
        required: false, 
        description: 'Defines the input component type. "text" for standard input, "select" for single-choice dropdown, "multiselect" for multiple selections, "selectWithSearch" for searchable multi-select, "chips" for tag-style input, "withButton" for input with inline action button.' 
      },
      { 
        name: 'placeholder', 
        type: 'string', 
        default: '"Enter text"', 
        required: false, 
        description: 'Placeholder text shown when input is empty. For select types, shown when no option is selected.' 
      },
      { 
        name: 'value', 
        type: 'string | string[]', 
        default: '—', 
        required: false, 
        description: 'Current input value. For "text" type, pass a string. For "select", pass the selected value. For "multiselect" or "selectWithSearch", pass an array of selected values.' 
      },
      { 
        name: 'onChangeText', 
        type: '(value: string | string[]) => void', 
        default: '—', 
        required: true, 
        description: 'Callback fired when value changes. Receives string for "text"/"select" types, or array of values for "multiselect"/"selectWithSearch". Required for controlled input.' 
      },
      { 
        name: 'disabled', 
        type: 'boolean', 
        default: 'false', 
        required: false, 
        description: 'When true, disables the input with visual feedback (gray background #f2f2f2, muted text). Prevents user interaction and dropdown opening.' 
      },
      { 
        name: 'label', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Label text displayed above the input field. Styled with font-weight 600 and darker color for visibility.' 
      },
      { 
        name: 'error', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Error message displayed below the input. When provided, applies red border (#d9232d) to input and shows error text in red.' 
      },
      { 
        name: 'leftIcon', 
        type: '"search" | "email" | "send" | "close" | "check" | "arrow-drop-down"', 
        default: '—', 
        required: false, 
        description: 'Built-in emoji icon displayed on the left side of the input. Available icons: search (🔍), email (✉️), send (📤), close (×), check (✓), arrow-drop-down (▼).' 
      },
      { 
        name: 'rightIcon', 
        type: '"search" | "email" | "send" | "close" | "check" | "arrow-drop-down"', 
        default: '—', 
        required: false, 
        description: 'Built-in emoji icon displayed on the right side of the input. Same icon options as leftIcon.' 
      },
      { 
        name: 'options', 
        type: '{ label: string; value: string | number }[]', 
        default: '[]', 
        required: false, 
        description: 'Array of options for select/multiselect/selectWithSearch types. Each option must have a "label" (displayed text) and "value" (returned on selection).' 
      },
      { 
        name: 'chips', 
        type: 'string[]', 
        default: '[]', 
        required: false, 
        description: 'Array of chip/tag values for "chips" type. Each string renders as a removable chip with close button.' 
      },
      { 
        name: 'onAddChip', 
        type: '(chip: string) => void', 
        default: '—', 
        required: false, 
        description: 'Callback fired when user submits a new chip (presses Enter). Receives the trimmed text value. Only used with type="chips".' 
      },
      { 
        name: 'onRemoveChip', 
        type: '(chip: string) => void', 
        default: '—', 
        required: false, 
        description: 'Callback fired when user removes a chip by pressing the close button. Receives the chip value being removed. Only used with type="chips".' 
      },
      { 
        name: 'buttonProps', 
        type: '{ title?: string; onPress?: () => void; ...TouchableOpacityProps }', 
        default: '{}', 
        required: false, 
        description: 'Props for the inline button when type="withButton". Accepts "title" for button text (default "Button") and any TouchableOpacity props including onPress handler.' 
      },
      { 
        name: '...props', 
        type: 'TextInputProps', 
        default: '—', 
        required: false, 
        description: 'Additional props passed to the underlying TextInput (for "text" type). Supports all React Native TextInput props like keyboardType, autoCapitalize, secureTextEntry, etc.' 
      },
    ],
    usageCode: `import Input from '@atom-design-mog/input';

// Simple text input with label
<Input
  type="text"
  label="Your Name"
  placeholder="Enter your name"
  value={name}
  onChangeText={setName}
/>

// Text input with icons
<Input
  type="text"
  placeholder="Search..."
  leftIcon="search"
  value={searchText}
  onChangeText={setSearchText}
/>

// Input with error state
<Input
  type="text"
  label="Email"
  placeholder="Enter email"
  value={email}
  onChangeText={setEmail}
  error={emailError}
  leftIcon="email"
/>

// Single select dropdown
<Input
  type="select"
  label="Select Country"
  placeholder="Choose a country"
  options={[
    { label: 'India', value: 'IN' },
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' },
  ]}
  value={country}
  onChangeText={setCountry}
/>

// Multi-select dropdown
<Input
  type="multiselect"
  label="Select Skills"
  placeholder="Choose skills"
  options={[
    { label: 'React', value: 'react' },
    { label: 'React Native', value: 'rn' },
    { label: 'JavaScript', value: 'js' },
    { label: 'TypeScript', value: 'ts' },
  ]}
  value={skills}
  onChangeText={setSkills}
/>

// Searchable multi-select
<Input
  type="selectWithSearch"
  label="Select Products"
  placeholder="Search and select..."
  options={productOptions}
  value={selectedProducts}
  onChangeText={setSelectedProducts}
/>

// Chips/Tags input
<Input
  type="chips"
  label="Tags"
  chips={tags}
  onAddChip={(chip) => setTags([...tags, chip])}
  onRemoveChip={(chip) => setTags(tags.filter(t => t !== chip))}
/>

// Input with inline button
<Input
  type="withButton"
  placeholder="Enter coupon code"
  value={coupon}
  onChangeText={setCoupon}
  buttonProps={{
    title: 'Apply',
    onPress: () => applyCoupon(coupon),
  }}
/>

// Disabled input
<Input
  type="text"
  label="Read Only"
  value="Cannot edit this"
  disabled
/>`,
    features: [
      '6 input types: text, select, multiselect, selectWithSearch, chips, withButton',
      'Modal-based dropdown with smooth animation',
      'Searchable dropdown with real-time filtering',
      'Multi-select with Clear/Apply footer actions',
      'Chips/tags UI with add and remove functionality',
      'Built-in emoji icons (search, email, send, close, check, arrow)',
      'Label and error message display',
      'Disabled state with visual feedback',
      'Input with inline action button',
      'Fully controlled via value and onChangeText',
    ],
    dosAndDonts: {
      dos: [
        'Always provide a label for better accessibility and UX',
        'Show clear error messages for validation feedback',
        'Use appropriate input type for the data being collected',
        'Provide meaningful placeholder text',
        'Handle the onChangeText callback to update state',
      ],
      donts: [
        'Don\'t rely on placeholder as the only label',
        'Avoid extremely long labels that may truncate',
        'Don\'t use multiselect for very large option lists without search',
        'Avoid leaving error messages unclear or too technical',
      ],
    },
    accessibilityNotes: [
      'Labels are visually linked to inputs for context',
      'Error messages provide clear validation feedback',
      'Disabled state prevents interaction and is visually indicated',
      'Modal dropdowns can be dismissed by tapping overlay',
      'Chip close buttons are touch-friendly',
    ],
  },

  search: {
    name: 'Search',
    package: '@atom-design-mog/search',
    version: '1.0.2',
    description: 'A flexible Search component for React Native with built-in search bar, multi-select filter chips, and FlatList-based results rendering. Features live search updates, toggleable filter tags, and customizable result items with empty state handling.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/search',
    snackId: '@avi-moglix/search-component',
    status: 'new',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: [],
    propsData: [
      { 
        name: 'placeholder', 
        type: 'string', 
        default: '"Search..."', 
        required: false, 
        description: 'Placeholder text displayed in the search input when empty. Styled with #888 color for visual distinction from entered text.' 
      },
      { 
        name: 'onSearch', 
        type: '(query: string) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered on every text change in the search input. Receives the current query string. Use this to filter your data or trigger API calls (consider debouncing for performance).' 
      },
      { 
        name: 'results', 
        type: '{ id: string | number; label: string }[]', 
        default: '[]', 
        required: false, 
        description: 'Array of result items to display in the list. Each item must have an "id" (used as key) and "label" (displayed text). Results are rendered using FlatList for optimal performance.' 
      },
      { 
        name: 'filters', 
        type: 'string[]', 
        default: '[]', 
        required: false, 
        description: 'Array of filter label strings displayed as toggleable chips below the search bar. Filters wrap to multiple lines if needed. Example: ["All", "Category 1", "Category 2"].' 
      },
      { 
        name: 'onFilterSelect', 
        type: '(selectedFilters: string[]) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when filters are toggled. Receives an array of currently selected filter strings. Use this to filter your results based on selected categories.' 
      },
      { 
        name: 'onResultPress', 
        type: '(item: { id: string | number; label: string }) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when a result item is pressed. Receives the full item object. Use this to navigate to details or perform actions on the selected item.' 
      },
      { 
        name: '...props', 
        type: 'ViewProps', 
        default: '—', 
        required: false, 
        description: 'Additional props passed to the container View component. Supports all React Native View props like style, testID, accessibilityLabel, etc.' 
      },
    ],
    usageCode: `import React, { useState } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import Search from '@atom-design-mog/search';

export default function SearchScreen() {
  // Master data
  const allItems = [
    { id: '1', label: 'React Native Components' },
    { id: '2', label: 'JavaScript Utilities' },
    { id: '3', label: 'TypeScript Helpers' },
    { id: '4', label: 'UI Design Patterns' },
    { id: '5', label: 'Mobile Development' },
  ];

  const [results, setResults] = useState(allItems);
  const filters = ['All', 'Components', 'Utilities', 'Patterns'];

  // Handle search query
  const handleSearch = (query) => {
    if (!query.trim()) {
      setResults(allItems);
      return;
    }
    const filtered = allItems.filter(item =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  // Handle filter selection
  const handleFilterSelect = (selectedFilters) => {
    console.log('Active filters:', selectedFilters);
    // Apply filter logic to your data
  };

  // Handle result tap
  const handleResultPress = (item) => {
    Alert.alert('Selected', item.label);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Search
        placeholder="Search items..."
        onSearch={handleSearch}
        results={results}
        filters={filters}
        onFilterSelect={handleFilterSelect}
        onResultPress={handleResultPress}
      />
    </SafeAreaView>
  );
}

// Minimal usage (just search bar)
<Search
  placeholder="Quick search..."
  onSearch={(query) => console.log(query)}
/>

// With results only (no filters)
<Search
  placeholder="Find products..."
  onSearch={handleSearch}
  results={products}
  onResultPress={(item) => navigateToProduct(item.id)}
/>

// With filters only
<Search
  placeholder="Search..."
  onSearch={handleSearch}
  results={results}
  filters={['New', 'Popular', 'Sale']}
  onFilterSelect={handleFilterSelect}
/>`,
    features: [
      'Built-in search bar with search icon (🔍)',
      'Live search with onSearch callback on every keystroke',
      'Multi-select filter chips with toggle behavior',
      'Filter chips wrap to multiple lines automatically',
      'FlatList-based results for optimal scroll performance',
      'Customizable result item press handling',
      'Built-in empty state ("No results found")',
      'Clean default styling with rounded corners',
      'Selected filters highlighted in red (#d9232d)',
      'Fully controlled by parent component',
    ],
    dosAndDonts: {
      dos: [
        'Debounce the onSearch callback for API calls to avoid excessive requests',
        'Show loading state while fetching results',
        'Provide meaningful empty state or customize with ListEmptyComponent',
        'Keep filter labels short for better chip display',
        'Pre-populate results to show initial content',
      ],
      donts: [
        'Don\'t trigger expensive API calls on every keystroke without debouncing',
        'Avoid using too many filter options (5-7 max recommended)',
        'Don\'t forget to handle the empty results state in your UI',
        'Avoid very long result labels that may truncate',
      ],
    },
    accessibilityNotes: [
      'Search input has proper placeholder for context',
      'Filter chips are touchable with adequate tap targets',
      'Result items are pressable with visual feedback',
      'Empty state provides clear feedback when no results',
      'Container supports accessibilityLabel via ...props',
    ],
  },

  calendar: {
    name: 'Calendar',
    package: '@atom-design-mog/calendar',
    version: '1.0.0',
    description: 'A customizable Calendar component for React Native built on top of react-native-calendars. Features date selection with visual highlighting, min/max date constraints, custom marked dates, and a clean themed UI with Atom Design System colors.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/calendar',
    snackId: '@avi-moglix/calender-component',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: [],
    propsData: [
      { 
        name: 'selectedDate', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Currently selected date in "YYYY-MM-DD" format (e.g., "2025-12-01"). The selected date is highlighted with a red background (#d9232d) and marked indicator.' 
      },
      { 
        name: 'onDateSelect', 
        type: '(dateString: string) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when a date is pressed. Receives the selected date as a string in "YYYY-MM-DD" format. Use this to update your selectedDate state.' 
      },
      { 
        name: 'minDate', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Minimum selectable date in "YYYY-MM-DD" format. Dates before this will be grayed out and non-interactive. Useful for booking systems or date ranges.' 
      },
      { 
        name: 'maxDate', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Maximum selectable date in "YYYY-MM-DD" format. Dates after this will be grayed out and non-interactive. Combine with minDate for date range selection.' 
      },
      { 
        name: 'markedDates', 
        type: 'object', 
        default: '{}', 
        required: false, 
        description: 'Object to mark specific dates with dots, colors, or custom styles. Keys are dates in "YYYY-MM-DD" format. Values follow react-native-calendars marking format: { marked: true, dotColor: "#color", activeOpacity: 0.5 }.' 
      },
      { 
        name: '...props', 
        type: 'CalendarProps', 
        default: '—', 
        required: false, 
        description: 'Additional props passed to the underlying react-native-calendars Calendar component. Supports all Calendar props like hideExtraDays, showWeekNumbers, firstDay, enableSwipeMonths, etc.' 
      },
    ],
    usageCode: `import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Calendar from '@atom-design-mog/calendar';

export default function CalendarExample() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ marginBottom: 10 }}>
        Selected: {selectedDate || 'None'}
      </Text>
      
      <Calendar
        selectedDate={selectedDate}
        onDateSelect={(date) => setSelectedDate(date)}
      />
    </View>
  );
}

// With min/max date constraints
<Calendar
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
  minDate="2025-01-01"
  maxDate="2025-12-31"
/>

// With custom marked dates (events, holidays, etc.)
<Calendar
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
  markedDates={{
    '2025-12-25': { marked: true, dotColor: '#059A6D' },
    '2025-12-31': { marked: true, dotColor: '#E3A003' },
    '2025-01-01': { marked: true, dotColor: '#086AC9' },
  }}
/>

// Booking system example (only future dates)
const today = new Date().toISOString().split('T')[0];

<Calendar
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
  minDate={today}
  markedDates={{
    '2025-12-10': { marked: true, dotColor: 'red', activeOpacity: 0 },
    '2025-12-11': { marked: true, dotColor: 'red', activeOpacity: 0 },
  }}
/>

// With additional react-native-calendars props
<Calendar
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
  hideExtraDays={true}
  enableSwipeMonths={true}
  firstDay={1} // Start week on Monday
/>`,
    features: [
      'Built on react-native-calendars for reliable date handling',
      'Date selection with red highlight (#d9232d)',
      'Today\'s date highlighted in red text',
      'Min/max date constraints for date range limits',
      'Custom marked dates with dots and colors',
      'Month navigation with red arrow buttons',
      'Clean card-style container with shadow',
      'Rounded corners (10px) for modern look',
      'Themed typography (16px days, 18px month, 14px headers)',
      'Supports all react-native-calendars props',
    ],
    peerDependencies: [
      { name: 'react-native-calendars', note: 'Required. Install with: npm install react-native-calendars' },
    ],
    dosAndDonts: {
      dos: [
        'Use "YYYY-MM-DD" format for all date strings',
        'Provide minDate for booking/scheduling to prevent past date selection',
        'Use markedDates to highlight events, holidays, or special dates',
        'Combine with a date display to show the selected date clearly',
        'Consider using enableSwipeMonths for better UX on mobile',
      ],
      donts: [
        'Don\'t use Date objects directly - convert to "YYYY-MM-DD" strings',
        'Avoid setting minDate after maxDate (invalid range)',
        'Don\'t overload markedDates with too many marked days (performance)',
        'Avoid complex custom themes that conflict with Atom colors',
      ],
    },
    accessibilityNotes: [
      'Calendar dates are accessible via react-native-calendars built-in a11y',
      'Selected date is visually distinct with background color',
      'Disabled dates (outside min/max) are grayed out',
      'Navigation arrows have adequate touch targets',
      'Consider adding accessibilityLabel to describe the calendar purpose',
    ],
  },

  datepicker: {
    name: 'Datepicker',
    package: '@atom-design-mog/datepicker',
    version: '1.0.0',
    description: 'A versatile DatePicker component for React Native supporting date, time, datetime, and date range selection. Built on @react-native-community/datetimepicker with platform-specific handling for iOS and Android, including a two-step datetime flow for Android compatibility.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/datepicker',
    snackId: '@avi-moglix/datepicker-component',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: ['date', 'range', 'datetime', 'time'],
    propsData: [
      { 
        name: 'type', 
        type: '"date" | "range" | "datetime" | "time"', 
        default: '"date"', 
        required: false, 
        description: 'Picker mode. "date" for single date selection, "time" for time only, "datetime" for combined date and time (uses two-step flow on Android), "range" for selecting start and end dates sequentially.' 
      },
      { 
        name: 'label', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Label text displayed above the picker input. Styled with font-weight 600 and #333 color for visibility.' 
      },
      { 
        name: 'placeholder', 
        type: 'string', 
        default: '"Select date"', 
        required: false, 
        description: 'Placeholder text shown when no date is selected. Displays contextually based on type (e.g., "Start date – End date" for range).' 
      },
      { 
        name: 'value', 
        type: 'Date | { start: Date; end: Date }', 
        default: '—', 
        required: false, 
        description: 'Current selected value. For "date", "time", "datetime" types, pass a Date object. For "range" type, pass an object with start and end Date properties.' 
      },
      { 
        name: 'onChange', 
        type: '(value: Date | { start: Date; end: Date }) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when selection changes. Receives Date object for single selections, or { start, end } object for range type. Called after each step completion.' 
      },
      { 
        name: 'disabled', 
        type: 'boolean', 
        default: 'false', 
        required: false, 
        description: 'When true, disables the picker with visual feedback (gray background #f5f5f5, muted text #999). Prevents picker from opening.' 
      },
      { 
        name: 'hint', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Helper text displayed below the picker input. Useful for format hints or additional instructions. Styled in #666 color, 12px font size.' 
      },
      { 
        name: '...props', 
        type: 'DateTimePickerProps', 
        default: '—', 
        required: false, 
        description: 'Additional props passed to the underlying @react-native-community/datetimepicker. Supports minimumDate, maximumDate, minuteInterval, locale, timeZoneOffsetInMinutes, etc.' 
      },
    ],
    usageCode: `import React, { useState } from 'react';
import { View } from 'react-native';
import DatePicker from '@atom-design-mog/datepicker';

export default function DatePickerExample() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  return (
    <View style={{ padding: 16 }}>
      {/* Simple date picker */}
      <DatePicker
        type="date"
        label="Select Date"
        placeholder="Choose a date"
        value={date}
        onChange={setDate}
        hint="Format: MM/DD/YYYY"
      />

      {/* Time picker */}
      <DatePicker
        type="time"
        label="Select Time"
        placeholder="Choose time"
        value={time}
        onChange={setTime}
      />

      {/* DateTime picker (two-step on Android) */}
      <DatePicker
        type="datetime"
        label="Appointment"
        placeholder="Select date and time"
        value={dateTime}
        onChange={setDateTime}
      />

      {/* Date range picker */}
      <DatePicker
        type="range"
        label="Travel Dates"
        placeholder="Select dates"
        value={dateRange}
        onChange={setDateRange}
        hint="Select start date, then end date"
      />
    </View>
  );
}

// With min/max date constraints
<DatePicker
  type="date"
  label="Booking Date"
  value={bookingDate}
  onChange={setBookingDate}
  minimumDate={new Date()} // Can't select past dates
  maximumDate={new Date(2025, 11, 31)} // Max Dec 31, 2025
/>

// Disabled state
<DatePicker
  type="date"
  label="Locked Date"
  value={lockedDate}
  disabled={true}
/>

// With minute interval (time/datetime)
<DatePicker
  type="time"
  label="Meeting Time"
  value={meetingTime}
  onChange={setMeetingTime}
  minuteInterval={15} // 15-minute increments
/>`,
    features: [
      '4 picker modes: date, time, datetime, range',
      'Date range selection with sequential start/end flow',
      'Platform-specific handling (inline on iOS, modal on Android)',
      'Two-step datetime flow for Android compatibility',
      'Clean input display with calendar icon (📅)',
      'Formatted date display (MM/DD/YYYY, 12-hour time)',
      'Label and hint text support',
      'Disabled state with visual feedback',
      'Supports min/max date constraints via ...props',
      'Built on @react-native-community/datetimepicker',
    ],
    peerDependencies: [
      { name: '@react-native-community/datetimepicker', note: 'Required. Install with: npm install @react-native-community/datetimepicker' },
    ],
    dosAndDonts: {
      dos: [
        'Use "range" type for booking/travel date selection',
        'Provide hint text for date format expectations',
        'Set minimumDate to prevent past date selection when needed',
        'Handle the onChange callback to update your state',
        'Test datetime mode on both iOS and Android',
      ],
      donts: [
        'Don\'t forget to install @react-native-community/datetimepicker peer dependency',
        'Avoid mixing Date objects with string dates in value prop',
        'Don\'t set minimumDate after maximumDate (invalid range)',
        'Avoid extremely short minuteInterval values (can be hard to use)',
      ],
    },
    accessibilityNotes: [
      'Uses native DateTimePicker for platform accessibility support',
      'Disabled state prevents interaction and shows visual indication',
      'Touch target (40px height) meets accessibility guidelines',
      'Label text provides context for screen readers',
      'Consider adding accessibilityLabel for more descriptive announcements',
    ],
  },

  dropdown: {
    name: 'Dropdown',
    package: '@atom-design-mog/dropdown',
    version: '1.0.0',
    description: 'A positioned Dropdown component for React Native that anchors to its trigger element. Uses measureInWindow to calculate exact screen position, rendering a modal-based dropdown list directly below the trigger with proper alignment and shadow styling.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/dropdown',
    snackId: '@avi-moglix/dropdown-component',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: [],
    propsData: [
      { 
        name: 'label', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Label text displayed above the dropdown trigger. Styled with font-weight 600 and #333 color.' 
      },
      { 
        name: 'triggerText', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Text displayed on the trigger button. When not provided, falls back to placeholder text. Use this to show the currently selected option label.' 
      },
      { 
        name: 'placeholder', 
        type: 'string', 
        default: '"Select..."', 
        required: false, 
        description: 'Placeholder text shown when no option is selected (when triggerText is not provided).' 
      },
      { 
        name: 'options', 
        type: '{ label: string; value: string | number }[]', 
        default: '[]', 
        required: false, 
        description: 'Array of dropdown options. Each option must have a "label" (displayed text) and "value" (returned on selection). Options render in a scrollable list with max height of 300px.' 
      },
      { 
        name: 'onSelect', 
        type: '(value: string | number) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when an option is selected. Receives the value of the selected option (not the label). Dropdown closes automatically after selection.' 
      },
      { 
        name: 'style', 
        type: 'ViewStyle', 
        default: '—', 
        required: false, 
        description: 'Custom styles applied to the outer container View. Use for margins, padding, or positioning adjustments.' 
      },
      { 
        name: 'dropdownStyle', 
        type: 'ViewStyle', 
        default: '—', 
        required: false, 
        description: 'Custom styles applied to the dropdown menu. Useful for adjusting maxHeight, backgroundColor, or shadow properties.' 
      },
    ],
    usageCode: `import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Dropdown from '@atom-design-mog/dropdown';

export default function DropdownExample() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState('');

  const options = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
  ];

  const handleSelect = (value) => {
    setSelectedValue(value);
    // Find the label for display
    const option = options.find(opt => opt.value === value);
    setSelectedLabel(option?.label || '');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Selected: {selectedValue || 'None'}</Text>
      
      <Dropdown
        label="Choose Option"
        placeholder="Select an option..."
        triggerText={selectedLabel}
        options={options}
        onSelect={handleSelect}
      />
    </View>
  );
}

// Simple dropdown without label
<Dropdown
  placeholder="Select category"
  options={[
    { label: 'Electronics', value: 'electronics' },
    { label: 'Clothing', value: 'clothing' },
    { label: 'Home & Garden', value: 'home' },
  ]}
  onSelect={(value) => setCategory(value)}
/>

// With custom dropdown styling
<Dropdown
  label="Priority"
  triggerText={priorityLabel}
  options={priorityOptions}
  onSelect={handlePrioritySelect}
  dropdownStyle={{ maxHeight: 200, backgroundColor: '#fafafa' }}
/>

// Long options list (scrollable)
<Dropdown
  label="Country"
  placeholder="Select country"
  triggerText={countryLabel}
  options={countryList} // Array of 100+ countries
  onSelect={handleCountrySelect}
/>`,
    features: [
      'Positioned dropdown anchored to trigger element',
      'Uses measureInWindow for accurate screen positioning',
      'Modal-based rendering for proper z-index layering',
      'ScrollView for long option lists (max 300px height)',
      'Tap-outside-to-close overlay behavior',
      'Label text support above trigger',
      'Placeholder text when no selection',
      'Platform-specific shadow styling (iOS/Android)',
      'Custom styling for container and dropdown menu',
      'Automatic close on option selection',
    ],
    dosAndDonts: {
      dos: [
        'Track both value and label in state for proper display',
        'Use triggerText to show the currently selected option label',
        'Keep option lists reasonable in length for performance',
        'Provide meaningful labels and placeholders',
        'Use dropdownStyle to adjust maxHeight for longer lists',
      ],
      donts: [
        'Don\'t forget to update triggerText when selection changes',
        'Avoid extremely long option labels (may truncate)',
        'Don\'t use for very large datasets (100+ items) without virtualization',
        'Avoid placing dropdown near screen edges (may clip)',
      ],
    },
    accessibilityNotes: [
      'Trigger button is touchable with adequate tap target',
      'Options are individually selectable via touch',
      'Modal overlay allows dismissal by tapping outside',
      'Consider adding accessibilityLabel to describe the dropdown purpose',
      'Label text provides context for the dropdown field',
    ],
  },

  menu: {
    name: 'Menu',
    package: '@atom-design-mog/menu',
    version: '1.0.0',
    description: 'A versatile Menu component for React Native supporting multiple selection modes: searchable radio buttons, searchable checkboxes with "Check All", searchable checkboxes with chips display, and a dual-input form with footer actions. Features modal-based rendering with search filtering and Atom Design System styling.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/menu',
    snackId: '@avi-moglix/menu-component',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: ['searchRadio', 'searchCheckbox', 'searchChipsCheckbox', 'inputFooter'],
    propsData: [
      { 
        name: 'type', 
        type: '"searchRadio" | "searchCheckbox" | "searchChipsCheckbox" | "inputFooter"', 
        default: '—', 
        required: true, 
        description: 'Menu type. "searchRadio" for single selection with search, "searchCheckbox" for multi-select with Check All option, "searchChipsCheckbox" for multi-select with chip tags display, "inputFooter" for dual input fields with Okay/Cancel buttons.' 
      },
      { 
        name: 'label', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Label text displayed above the trigger button. Styled with font-weight 600 and #333 color.' 
      },
      { 
        name: 'triggerText', 
        type: 'string', 
        default: '—', 
        required: true, 
        description: 'Text displayed on the trigger button. Shows alongside a dropdown arrow icon (▼). Update this to reflect current selection.' 
      },
      { 
        name: 'options', 
        type: '{ label: string; value: string | number }[]', 
        default: '[]', 
        required: false, 
        description: 'Array of selectable options for searchRadio, searchCheckbox, and searchChipsCheckbox types. Each option needs "label" (display text) and "value" (returned on selection). Options are filterable via the search input.' 
      },
      { 
        name: 'chips', 
        type: 'string[]', 
        default: '[]', 
        required: false, 
        description: 'Array of chip values displayed above options in "searchChipsCheckbox" type. Chips can be removed via the close button. Managed externally via onAddChip and onRemoveChip.' 
      },
      { 
        name: 'onSelect', 
        type: '(value: string | string[]) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered on selection. For "searchRadio", receives single value string. For "searchCheckbox" and "searchChipsCheckbox", receives array of selected values. Called immediately on each selection change.' 
      },
      { 
        name: 'onAddChip', 
        type: '(chip: string) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when a checkbox is selected in "searchChipsCheckbox" type. Receives the value to add as a chip. Use to update your chips array.' 
      },
      { 
        name: 'onRemoveChip', 
        type: '(chip: string) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when a chip close button is pressed in "searchChipsCheckbox" type. Receives the chip value to remove.' 
      },
      { 
        name: 'onApply', 
        type: '(data: { input1: string; input2: string }) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when "Okay" button is pressed in "inputFooter" type. Receives object with both input values. Menu closes after callback.' 
      },
      { 
        name: 'onCancel', 
        type: '() => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when "Cancel" button is pressed in "inputFooter" type. Menu closes after callback. Use to reset any pending changes.' 
      },
    ],
    usageCode: `import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Menu from '@atom-design-mog/menu';

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
  { label: 'Option D', value: 'd' },
];

// Search Radio (single select)
export function SearchRadioExample() {
  const [selected, setSelected] = useState('');

  return (
    <Menu
      type="searchRadio"
      label="Select One"
      triggerText={selected || 'Choose option'}
      options={options}
      onSelect={(value) => setSelected(value)}
    />
  );
}

// Search Checkbox (multi-select with Check All)
export function SearchCheckboxExample() {
  const [selected, setSelected] = useState([]);

  return (
    <Menu
      type="searchCheckbox"
      label="Select Multiple"
      triggerText={selected.length ? \`\${selected.length} selected\` : 'Choose options'}
      options={options}
      onSelect={(values) => setSelected(values)}
    />
  );
}

// Search Chips Checkbox (multi-select with chips display)
export function SearchChipsCheckboxExample() {
  const [selected, setSelected] = useState([]);
  const [chips, setChips] = useState([]);

  return (
    <Menu
      type="searchChipsCheckbox"
      label="Select with Chips"
      triggerText={chips.length ? chips.join(', ') : 'Add items'}
      options={options}
      chips={chips}
      onSelect={(values) => setSelected(values)}
      onAddChip={(chip) => setChips([...chips, chip])}
      onRemoveChip={(chip) => setChips(chips.filter(c => c !== chip))}
    />
  );
}

// Input Footer (dual inputs with apply/cancel)
export function InputFooterExample() {
  const handleApply = ({ input1, input2 }) => {
    console.log('Range:', input1, '-', input2);
  };

  return (
    <Menu
      type="inputFooter"
      label="Quantity Range"
      triggerText="Set range"
      onApply={handleApply}
      onCancel={() => console.log('Cancelled')}
    />
  );
}`,
    features: [
      '4 menu types: searchRadio, searchCheckbox, searchChipsCheckbox, inputFooter',
      'Real-time search filtering across all options',
      '"Check All" toggle for searchCheckbox type',
      'Chip tags display with remove functionality',
      'Dual number inputs with Okay/Cancel footer',
      'Modal-based rendering with dark overlay',
      'Tap-outside-to-close behavior',
      'Custom styled radio buttons and checkboxes (#d9232d)',
      'Emoji-based icons (🔍, ×, ▼)',
      'ScrollView for long option lists (max 450px height)',
    ],
    dosAndDonts: {
      dos: [
        'Use "searchRadio" for single-choice selection',
        'Use "searchCheckbox" when users can select multiple options',
        'Use "searchChipsCheckbox" to visually show selections as tags',
        'Use "inputFooter" for numeric range filters',
        'Update triggerText to reflect current selection state',
      ],
      donts: [
        'Don\'t forget to pass the required "type" prop',
        'Avoid very long option labels (may truncate in search results)',
        'Don\'t use inputFooter type with options (they\'re ignored)',
        'Avoid mixing chip management with external state inconsistently',
      ],
    },
    accessibilityNotes: [
      'Trigger button and options have adequate touch targets',
      'Modal can be dismissed by tapping the overlay',
      'Radio and checkbox states are visually distinct',
      'Search input allows keyboard filtering',
      'Consider adding accessibilityLabel to the trigger for screen readers',
    ],
  },

  controls: {
    name: 'Controls',
    package: '@atom-design-mog/controls',
    version: '1.0.0',
    description: 'A unified form controls component for React Native supporting checkboxes, radio buttons, and toggle switches. Features "Check All" functionality with indeterminate state for checkboxes, row/column layouts for radio groups, and native Switch integration for toggles. Styled with Atom Design System colors (#d9232d).',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/controls',
    snackId: '@avi-moglix/controls-component',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: ['checkbox', 'radio', 'toggle'],
    propsData: [
      { 
        name: 'type', 
        type: '"checkbox" | "radio" | "toggle"', 
        default: '—', 
        required: true, 
        description: 'Control type. "checkbox" for multi-select with optional Check All, "radio" for single selection from options, "toggle" for boolean on/off switch.' 
      },
      { 
        name: 'options', 
        type: '{ label: string; value: string | number }[]', 
        default: '[]', 
        required: false, 
        description: 'Array of selectable options for "checkbox" and "radio" types. Each option needs "label" (display text) and "value" (returned on selection). Not used for "toggle" type.' 
      },
      { 
        name: 'value', 
        type: 'string | string[] | boolean', 
        default: '—', 
        required: true, 
        description: 'Current value. For "checkbox": array of selected values (e.g., ["a", "b"]). For "radio": single selected value string. For "toggle": boolean true/false.' 
      },
      { 
        name: 'onChange', 
        type: '(value: string | string[] | boolean) => void', 
        default: '—', 
        required: true, 
        description: 'Callback triggered on value change. For "checkbox": receives updated array of selected values. For "radio": receives the selected value. For "toggle": receives boolean.' 
      },
      { 
        name: 'label', 
        type: 'string', 
        default: '—', 
        required: false, 
        description: 'Label text for "toggle" type only. Displayed to the left of the switch. For checkbox/radio, labels come from options array.' 
      },
      { 
        name: 'layout', 
        type: '"row" | "column"', 
        default: '"column"', 
        required: false, 
        description: 'Layout direction for "radio" type. "column" stacks options vertically, "row" displays them horizontally with wrapping. Adds 16px right margin between row items.' 
      },
      { 
        name: 'checkAll', 
        type: 'boolean', 
        default: 'false', 
        required: false, 
        description: 'For "checkbox" type only. When true, shows a "Check All" option at the top. Displays indeterminate state (-) when some but not all options are selected.' 
      },
      { 
        name: 'onCheckAll', 
        type: '(isAllChecked: boolean) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when "Check All" is toggled. Receives true when all options become selected, false when deselected. Used for "checkbox" type with checkAll enabled.' 
      },
      { 
        name: '...props', 
        type: 'SwitchProps', 
        default: '—', 
        required: false, 
        description: 'Additional props passed to the Switch component for "toggle" type. Supports all React Native Switch props like disabled, ios_backgroundColor, etc.' 
      },
    ],
    usageCode: `import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Controls from '@atom-design-mog/controls';

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];

// Checkbox (multi-select)
export function CheckboxExample() {
  const [selected, setSelected] = useState([]);

  return (
    <View>
      <Text>Selected: {selected.join(', ') || 'None'}</Text>
      <Controls
        type="checkbox"
        options={options}
        value={selected}
        onChange={setSelected}
      />
    </View>
  );
}

// Checkbox with Check All
export function CheckboxWithCheckAllExample() {
  const [selected, setSelected] = useState([]);

  return (
    <Controls
      type="checkbox"
      options={options}
      value={selected}
      onChange={setSelected}
      checkAll={true}
      onCheckAll={(allChecked) => console.log('All checked:', allChecked)}
    />
  );
}

// Radio (single select - column layout)
export function RadioColumnExample() {
  const [selected, setSelected] = useState('');

  return (
    <Controls
      type="radio"
      options={options}
      value={selected}
      onChange={setSelected}
      layout="column"
    />
  );
}

// Radio (single select - row layout)
export function RadioRowExample() {
  const [selected, setSelected] = useState('a');

  return (
    <Controls
      type="radio"
      options={options}
      value={selected}
      onChange={setSelected}
      layout="row"
    />
  );
}

// Toggle switch
export function ToggleExample() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Controls
      type="toggle"
      label="Enable notifications"
      value={enabled}
      onChange={setEnabled}
    />
  );
}

// Toggle with additional Switch props
<Controls
  type="toggle"
  label="Dark mode"
  value={isDarkMode}
  onChange={setIsDarkMode}
  disabled={false}
  ios_backgroundColor="#ccc"
/>`,
    features: [
      '3 control types: checkbox, radio, toggle',
      'Checkbox multi-select with array value management',
      '"Check All" option with indeterminate state (-)',
      'Radio single-select with row/column layouts',
      'Native Switch component for toggle type',
      'Custom styled controls with Atom red (#d9232d)',
      'Checkbox: 20x20 square with checkmark (✓)',
      'Radio: 20x20 circle with inner dot',
      'Toggle: Red track when on, gray when off',
      'Row layout wraps with 16px spacing',
    ],
    dosAndDonts: {
      dos: [
        'Initialize checkbox value as empty array []',
        'Initialize radio value as empty string or first option',
        'Initialize toggle value as boolean (false)',
        'Use checkAll for long checkbox lists to improve UX',
        'Use row layout for radio when options are short (2-3 items)',
      ],
      donts: [
        'Don\'t pass string to checkbox value (must be array)',
        'Don\'t forget to pass required type prop',
        'Avoid mixing value types between control types',
        'Don\'t use options array for toggle type (it\'s ignored)',
      ],
    },
    accessibilityNotes: [
      'Touch targets (20x20) meet minimum size requirements',
      'Visual distinction between checked and unchecked states',
      'Indeterminate checkbox state clearly indicated with dash',
      'Toggle uses native Switch for built-in accessibility',
      'Consider adding accessibilityLabel to options for screen readers',
    ],
  },

  tabs: {
    name: 'Tabs',
    package: '@atom-design-mog/tabs',
    version: '1.0.0',
    description: 'A flexible Tab navigation component for React Native with 6 visual variants including rounded, squared, and underline styles. Features active state highlighting with Atom Design System colors (#d9232d) and controlled tab switching.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/tabs',
    snackId: '@avi-moglix/tabs-component',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: ['allRadius', 'leftRightRadius', 'noRadius', 'roundedRadius', 'dualLineTopRadius', 'underLineTabBackground'],
    propsData: [
      { 
        name: 'tabs', 
        type: '{ id: string | number; name: string }[]', 
        default: '[]', 
        required: true, 
        description: 'Array of tab items. Each tab must have an "id" (unique identifier for tracking active state) and "name" (displayed text). Tabs are rendered in order with equal flex width.' 
      },
      { 
        name: 'activeTab', 
        type: 'string | number', 
        default: '—', 
        required: true, 
        description: 'The id of the currently active tab. Used to apply active styling (background color or underline). Should match one of the tab ids in the tabs array.' 
      },
      { 
        name: 'onTabChange', 
        type: '(tabId: string | number) => void', 
        default: '—', 
        required: true, 
        description: 'Callback triggered when a tab is pressed. Receives the id of the pressed tab. Use this to update your activeTab state.' 
      },
      { 
        name: 'variant', 
        type: '"allRadius" | "leftRightRadius" | "noRadius" | "roundedRadius" | "dualLineTopRadius" | "underLineTabBackground"', 
        default: '"allRadius"', 
        required: false, 
        description: 'Visual style variant. "allRadius" gives all tabs 6px radius. "leftRightRadius" rounds only first/last tabs. "noRadius" removes all rounding. "roundedRadius" uses pill shape (20px). "dualLineTopRadius" rounds top corners only. "underLineTabBackground" removes background and shows red underline for active tab.' 
      },
    ],
    usageCode: `import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Tabs from '@atom-design-mog/tabs';

const tabs = [
  { id: 'tab1', name: 'Home' },
  { id: 'tab2', name: 'Profile' },
  { id: 'tab3', name: 'Settings' },
];

// Basic tabs (allRadius - default)
export function TabsExample() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <View>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      {/* Tab content */}
      {activeTab === 'tab1' && <Text>Home Content</Text>}
      {activeTab === 'tab2' && <Text>Profile Content</Text>}
      {activeTab === 'tab3' && <Text>Settings Content</Text>}
    </View>
  );
}

// All Radius variant (default)
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="allRadius"
/>

// Left/Right Radius - only first and last tabs rounded
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="leftRightRadius"
/>

// No Radius - square corners
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="noRadius"
/>

// Rounded/Pill shape
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="roundedRadius"
/>

// Dual Line Top Radius
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="dualLineTopRadius"
/>

// Underline style (no background, red underline)
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="underLineTabBackground"
/>`,
    features: [
      '6 visual variants for different UI needs',
      'allRadius: 6px rounded corners on all tabs',
      'leftRightRadius: rounded only on first/last tabs',
      'noRadius: square corners for flat design',
      'roundedRadius: 20px pill-shaped tabs',
      'dualLineTopRadius: top corners only (for card-style)',
      'underLineTabBackground: underline style with no background',
      'Active state: red background (#d9232d) or red underline',
      'Equal flex width distribution across tabs',
      'Gray container background (#f0f0f0) with 4px padding',
    ],
    dosAndDonts: {
      dos: [
        'Use unique ids for each tab item',
        'Match activeTab to one of the tab ids',
        'Use "underLineTabBackground" for minimal/clean UI',
        'Use "roundedRadius" for pill-style toggle buttons',
        'Keep tab names short for better display',
      ],
      donts: [
        'Don\'t forget to initialize activeTab state',
        'Avoid very long tab names (may overflow)',
        'Don\'t use more than 4-5 tabs (consider scrollable tabs)',
        'Avoid mixing underline variant with background-based content',
      ],
    },
    accessibilityNotes: [
      'Tabs are touchable with adequate tap targets (10px vertical padding)',
      'Active tab is visually distinct (color change or underline)',
      'Text color changes for active state (white on red, or red text)',
      'Consider adding accessibilityLabel for screen readers',
      'Tab order follows array order for predictable navigation',
    ],
  },

  accordions: {
    name: 'Accordions',
    package: '@atom-design-mog/accordions',
    version: '1.0.0',
    description: 'A collapsible Accordion component for React Native with smooth LayoutAnimation transitions. Supports single or multiple expanded sections simultaneously. Features a clean header/content structure with expand/collapse icons (+/−) and proper border styling.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/accordions',
    snackId: '@avi-moglix/accordion-component',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: [],
    propsData: [
      { 
        name: 'items', 
        type: '{ title: string; content: string }[]', 
        default: '[]', 
        required: true, 
        description: 'Array of accordion items. Each item must have a "title" (header text shown in the clickable area) and "content" (text displayed when the section is expanded). Items are rendered in order with index-based tracking.' 
      },
      { 
        name: 'allowMultiple', 
        type: 'boolean', 
        default: 'false', 
        required: false, 
        description: 'When false (default), only one section can be expanded at a time—opening a new section closes the previous one. When true, multiple sections can be expanded simultaneously.' 
      },
      { 
        name: '...props', 
        type: 'ViewProps', 
        default: '—', 
        required: false, 
        description: 'Additional props passed to the container View component. Supports all React Native View props like style, testID, accessibilityLabel, etc.' 
      },
    ],
    usageCode: `import React from 'react';
import { View } from 'react-native';
import Accordion from '@atom-design-mog/accordions';

const faqItems = [
  { 
    title: 'What is React Native?', 
    content: 'React Native is a framework for building native mobile apps using JavaScript and React.' 
  },
  { 
    title: 'How do I install it?', 
    content: 'Run npm install @atom-design-mog/accordions in your project directory.' 
  },
  { 
    title: 'Is it customizable?', 
    content: 'Yes, you can pass custom styles and props to customize the appearance.' 
  },
];

// Single expand mode (default)
export function AccordionExample() {
  return (
    <View style={{ padding: 16 }}>
      <Accordion items={faqItems} />
    </View>
  );
}

// Multiple expand mode
export function AccordionMultipleExample() {
  return (
    <View style={{ padding: 16 }}>
      <Accordion 
        items={faqItems} 
        allowMultiple={true} 
      />
    </View>
  );
}

// FAQ section example
const productFAQ = [
  { title: 'Shipping Information', content: 'We ship worldwide within 5-7 business days.' },
  { title: 'Return Policy', content: 'Returns accepted within 30 days of purchase.' },
  { title: 'Payment Methods', content: 'We accept Visa, MasterCard, PayPal, and UPI.' },
  { title: 'Customer Support', content: 'Contact us at support@example.com or call 1800-XXX-XXXX.' },
];

<Accordion items={productFAQ} />`,
    features: [
      'Single or multiple expand modes via allowMultiple prop',
      'Smooth LayoutAnimation transitions on expand/collapse',
      'Header with title and +/− toggle icon',
      'Clean bordered container with 6px radius',
      'Gray header background (#f9f9f9) with white content area',
      'Automatic close of other sections in single mode',
      'Index-based internal state management',
      'Bottom border separators between items',
      'Font sizing: 16px title, 14px content',
      'Adequate touch target (16px padding) for headers',
    ],
    dosAndDonts: {
      dos: [
        'Use for FAQ sections, settings panels, or collapsible content',
        'Keep titles concise and descriptive',
        'Use allowMultiple for comparison or reference content',
        'Consider content length—very long content may need scrolling',
        'Enable UIManager.setLayoutAnimationEnabledExperimental on Android',
      ],
      donts: [
        'Don\'t nest accordions inside accordions',
        'Avoid very long titles that may wrap awkwardly',
        'Don\'t use for critical content that should always be visible',
        'Avoid having too many items (consider pagination for 10+ items)',
      ],
    },
    accessibilityNotes: [
      'Headers are touchable with adequate padding (16px)',
      'Expanded/collapsed state indicated by +/− icon',
      'Content visibility changes are animated smoothly',
      'Consider adding accessibilityLabel to describe accordion purpose',
      'Screen readers should announce expanded/collapsed state',
    ],
  },

  tooltip: {
    name: 'Tooltip',
    package: '@atom-design-mog/tooltip',
    version: '1.0.0',
    description: 'A positioned Tooltip component for React Native that displays contextual information on press. Uses measureInWindow for accurate positioning with support for 4 positions (top, bottom, left, right). Features smart edge detection, directional arrows, and supports both simple text and rich content with title/text.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/tooltip',
    snackId: '@avi-moglix/tooltip-component',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: [],
    propsData: [
      { 
        name: 'children', 
        type: 'ReactNode', 
        default: '—', 
        required: true, 
        description: 'The trigger element that shows the tooltip when pressed. Can be any React Native component (Text, Icon, Button, etc.). Wrapped in a TouchableOpacity for press handling.' 
      },
      { 
        name: 'content', 
        type: 'string | { title?: string; text?: string }', 
        default: '—', 
        required: true, 
        description: 'Tooltip content. Pass a string for simple text, or an object with "title" (bold, 16px) and "text" (regular, 14px) for rich content. Rich content increases tooltip height automatically.' 
      },
      { 
        name: 'position', 
        type: '"top" | "bottom" | "left" | "right"', 
        default: '"top"', 
        required: false, 
        description: 'Tooltip position relative to the trigger element. The tooltip includes a directional arrow pointing to the trigger. Smart edge detection prevents tooltips from going off-screen.' 
      },
    ],
    usageCode: `import React from 'react';
import { View, Text } from 'react-native';
import Tooltip from '@atom-design-mog/tooltip';

// Simple text tooltip
export function SimpleTooltipExample() {
  return (
    <Tooltip content="This is a helpful tip!" position="top">
      <Text style={{ color: '#086AC9' }}>Tap for info</Text>
    </Tooltip>
  );
}

// Rich content with title and text
export function RichTooltipExample() {
  return (
    <Tooltip
      content={{
        title: 'Pro Tip',
        text: 'You can use this feature to save time on repetitive tasks.',
      }}
      position="bottom"
    >
      <Text style={{ fontSize: 20 }}>💡</Text>
    </Tooltip>
  );
}

// Different positions
export function TooltipPositionsExample() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 50 }}>
      <Tooltip content="Top tooltip" position="top">
        <Text>Top ⬆</Text>
      </Tooltip>
      
      <Tooltip content="Bottom tooltip" position="bottom">
        <Text>Bottom ⬇</Text>
      </Tooltip>
      
      <Tooltip content="Left tooltip" position="left">
        <Text>Left ⬅</Text>
      </Tooltip>
      
      <Tooltip content="Right tooltip" position="right">
        <Text>Right ➡</Text>
      </Tooltip>
    </View>
  );
}

// Icon with tooltip
<Tooltip
  content="Add to favorites"
  position="bottom"
>
  <Text style={{ fontSize: 24 }}>⭐</Text>
</Tooltip>

// Help text tooltip
<Tooltip
  content={{
    title: 'Password Requirements',
    text: 'Must be at least 8 characters with one uppercase letter and one number.',
  }}
  position="right"
>
  <Text style={{ color: '#666' }}>ⓘ</Text>
</Tooltip>`,
    features: [
      '4 position options: top, bottom, left, right',
      'Simple string or rich { title, text } content',
      'Directional arrow pointing to trigger element',
      'Smart edge detection (10px screen margin)',
      'measureInWindow for accurate positioning',
      'Modal-based rendering for proper z-index',
      'Tap-outside-to-close behavior',
      'White background with shadow (elevation 10)',
      'Max width of 250px or 80% screen width',
      'Rich content: bold 16px title, regular 14px text',
    ],
    dosAndDonts: {
      dos: [
        'Use for contextual help or additional information',
        'Keep tooltip content concise and scannable',
        'Use rich content (title + text) for important explanations',
        'Position tooltips where they won\'t cover important UI',
        'Test tooltip visibility on different screen sizes',
      ],
      donts: [
        'Don\'t use tooltips for critical information that must be seen',
        'Avoid very long text content (may overflow)',
        'Don\'t place tooltips near screen edges without testing',
        'Avoid using tooltips for primary navigation or actions',
      ],
    },
    accessibilityNotes: [
      'Trigger is touchable with press feedback',
      'Modal overlay allows dismissal by tapping anywhere',
      'Content is readable with adequate font sizes (14-16px)',
      'Consider adding accessibilityLabel to trigger element',
      'Tooltips show on press (not hover) for touch accessibility',
    ],
  },

  cardslist: {
    name: 'Cards List',
    package: '@atom-design-mog/cardslist',
    version: '1.0.0',
    description: 'A responsive product cards grid component for React Native using FlatList. Features automatic column adjustment based on screen width (2-5 columns), product image with press handler, brand display, and a "Request Quote" button with press feedback. Optimized with React.memo for performance.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/cardslist',
    snackId: '@avi-moglix/cardslist-component-',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: [],
    propsData: [
      { 
        name: 'products', 
        type: '{ id: string | number; name: string; brand: string; image: string }[]', 
        default: '[]', 
        required: true, 
        description: 'Array of product objects to display. Each product must have "id" (unique key), "name" (product title, 2 lines max), "brand" (shown as "By: {brand}"), and "image" (URI for product image).' 
      },
      { 
        name: 'onProductPress', 
        type: '(product: Product) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when the product image is pressed. Receives the full product object. Use for navigation to product details.' 
      },
      { 
        name: 'onQuotePress', 
        type: '(product: Product) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when the "Request Quote" button is pressed. Receives the full product object. Use for quote request flow or modal.' 
      },
      { 
        name: 'numColumns', 
        type: 'number', 
        default: 'auto (2-5)', 
        required: false, 
        description: 'Override the automatic column count. By default, columns adjust responsively: 5 columns for >1200px, 4 for >992px, 3 for >768px, 2 for smaller screens. Image height also scales with column count.' 
      },
    ],
    usageCode: `import React from 'react';
import { View, Alert } from 'react-native';
import CardsList from '@atom-design-mog/cardslist';

const products = [
  {
    id: '1',
    name: 'Industrial Safety Helmet',
    brand: 'SafeGuard Pro',
    image: 'https://example.com/helmet.jpg',
  },
  {
    id: '2',
    name: 'Heavy Duty Work Gloves',
    brand: 'GripMaster',
    image: 'https://example.com/gloves.jpg',
  },
  {
    id: '3',
    name: 'Steel Toe Safety Boots',
    brand: 'ToughWear',
    image: 'https://example.com/boots.jpg',
  },
  {
    id: '4',
    name: 'High Visibility Safety Vest',
    brand: 'BrightSafe',
    image: 'https://example.com/vest.jpg',
  },
];

// Basic usage with automatic responsive columns
export function ProductGridExample() {
  const handleProductPress = (product) => {
    console.log('Navigate to:', product.name);
  };

  const handleQuotePress = (product) => {
    Alert.alert('Quote Request', \`Request quote for \${product.name}?\`);
  };

  return (
    <CardsList
      products={products}
      onProductPress={handleProductPress}
      onQuotePress={handleQuotePress}
    />
  );
}

// Fixed 2 columns (mobile layout)
<CardsList
  products={products}
  onProductPress={handleProductPress}
  onQuotePress={handleQuotePress}
  numColumns={2}
/>

// Fixed 3 columns (tablet layout)
<CardsList
  products={products}
  onProductPress={handleProductPress}
  onQuotePress={handleQuotePress}
  numColumns={3}
/>

// Product list for e-commerce
<CardsList
  products={catalogProducts}
  onProductPress={(product) => navigation.navigate('ProductDetail', { id: product.id })}
  onQuotePress={(product) => navigation.navigate('QuoteRequest', { product })}
/>`,
    features: [
      'Responsive grid: 2-5 columns based on screen width',
      'FlatList-based for optimal scroll performance',
      'Product card with image, name (2 lines), and brand',
      'Pressable product image for navigation',
      '"Request Quote" button with press feedback',
      'Button changes to red background when pressed',
      'React.memo optimized Card component',
      'Automatic image height scaling (95-150px)',
      'Card shadows with elevation (Android) and shadow (iOS)',
      'Consistent 12px gap between cards',
    ],
    dosAndDonts: {
      dos: [
        'Provide unique id for each product',
        'Use high-quality product images for best display',
        'Keep product names concise (max 2 lines)',
        'Handle both onProductPress and onQuotePress callbacks',
        'Use numColumns override for fixed layouts if needed',
      ],
      donts: [
        'Don\'t use very long product names (will truncate)',
        'Avoid missing image URIs (may show broken image)',
        'Don\'t forget to provide valid image URLs',
        'Avoid extremely large product arrays without pagination',
      ],
    },
    accessibilityNotes: [
      'Product images and buttons are Pressable for touch feedback',
      'Button press state provides visual feedback',
      'Product name limited to 2 lines with ellipsis',
      'Consider adding accessibilityLabel to product cards',
      'FlatList provides smooth scrolling for large lists',
    ],
  },

  carousel: {
    name: 'Carousel',
    package: '@atom-design-mog/carousel',
    version: '1.0.0',
    description: 'A full-width image/color carousel component for React Native with autoplay, animated progress bar, and dot navigation. Supports both image backgrounds (with text overlay) and solid color slides. Features infinite loop navigation, touch-enabled dot controls, and smooth scroll animations.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/carousel',
    snackId: '@avi-moglix/carousel-component',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: [],
    propsData: [
      { 
        name: 'slides', 
        type: '{ background: string; content?: string }[]', 
        default: '[]', 
        required: true, 
        description: 'Array of slide objects. Each slide has "background" (image URL or hex color like "#d9232d") and optional "content" (overlay text). If background starts with "#", it renders as solid color; otherwise as image.' 
      },
      { 
        name: 'autoPlay', 
        type: 'boolean', 
        default: 'true', 
        required: false, 
        description: 'Enable automatic slide advancement. Carousel loops infinitely when enabled. Disabled automatically if only 1 slide exists.' 
      },
      { 
        name: 'autoPlayInterval', 
        type: 'number', 
        default: '3000', 
        required: false, 
        description: 'Time in milliseconds between auto-advances. Also controls the progress bar animation duration.' 
      },
    ],
    usageCode: `import React from 'react';
import { View } from 'react-native';
import MoglixCarousel from '@atom-design-mog/carousel';

// Image slides with text overlay
const imageSlides = [
  {
    background: 'https://example.com/banner1.jpg',
    content: 'Summer Sale - Up to 50% Off!',
  },
  {
    background: 'https://example.com/banner2.jpg',
    content: 'Free Shipping on Orders Above ₹500',
  },
  {
    background: 'https://example.com/banner3.jpg',
  },
];

// Color slides (hex backgrounds)
const colorSlides = [
  { background: '#d9232d', content: 'Flash Sale!' },
  { background: '#2d5bd9', content: 'New Arrivals' },
  { background: '#28a745', content: 'Eco-Friendly Products' },
];

// Basic usage with autoplay
export function BannerCarousel() {
  return (
    <MoglixCarousel
      slides={imageSlides}
      autoPlay={true}
      autoPlayInterval={3000}
    />
  );
}

// Slower autoplay (5 seconds)
<MoglixCarousel
  slides={imageSlides}
  autoPlay={true}
  autoPlayInterval={5000}
/>

// Manual navigation only (no autoplay)
<MoglixCarousel
  slides={imageSlides}
  autoPlay={false}
/>

// Color-based promotional carousel
<MoglixCarousel
  slides={colorSlides}
  autoPlay={true}
  autoPlayInterval={4000}
/>

// Mixed image and color slides
const mixedSlides = [
  { background: 'https://example.com/promo.jpg', content: 'Weekend Special' },
  { background: '#ff6b35', content: 'Limited Time Offer' },
  { background: 'https://example.com/sale.jpg' },
];

<MoglixCarousel slides={mixedSlides} />`,
    features: [
      'Full-width responsive slides (screen width / 2.37 aspect ratio)',
      'Autoplay with configurable interval',
      'Animated progress bar showing time until next slide',
      'Interactive dot navigation (tap to jump)',
      'Infinite loop (last slide → first slide)',
      'Image slides with optional text overlay',
      'Solid color slides with centered text',
      'Text shadow on image overlays for readability',
      'Smooth scroll animations via ScrollView',
      'Active dot indicator (red #d9232d)',
      'Horizontal swipe gesture support',
      'Pause-aware progress bar restart on manual navigation',
    ],
    dosAndDonts: {
      dos: [
        'Use high-quality banner images for best display',
        'Keep overlay text short and readable',
        'Use hex colors starting with # for solid backgrounds',
        'Provide at least 2 slides for autoplay to work',
        'Use contrasting text colors for readability',
      ],
      donts: [
        'Don\'t use very long content text (may overflow)',
        'Avoid extremely short autoPlayInterval (<1000ms)',
        'Don\'t mix too many slides (5-7 recommended)',
        'Avoid low-contrast text on light images without overlay',
      ],
    },
    accessibilityNotes: [
      'Dots are TouchableOpacity for tap navigation',
      'Consider adding accessibilityLabel to slides',
      'Progress bar provides visual timing feedback',
      'Swipe gestures work with ScrollView pagingEnabled',
      'Active dot has distinct color for current position',
    ],
  },

  'upload-field': {
    name: 'Upload Field',
    package: '@atom-design-mog/upload-field',
    version: '1.0.0',
    description: 'A file upload component for React Native with image picker integration, camera fallback, file size validation, and upload progress indicator. Uses react-native-image-picker for media selection and react-native-progress for visual upload feedback.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/upload-field',
    snackId: '@avi-moglix/file-input',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: [],
    peerDependencies: [
      { name: 'react-native-image-picker', version: '^5.0.0', description: 'Required for launchImageLibrary and launchCamera functions' },
      { name: 'react-native-progress', version: '^5.0.0', description: 'Required for ProgressBar component' },
    ],
    propsData: [
      { 
        name: 'onFileSelected', 
        type: '(file: { uri: string; name: string; size: number; type: string }) => void', 
        default: '—', 
        required: false, 
        description: 'Callback triggered when a file is successfully selected. Receives file object with uri, name, size (bytes), and MIME type.' 
      },
      { 
        name: 'maxSizeMB', 
        type: 'number', 
        default: '50', 
        required: false, 
        description: 'Maximum allowed file size in megabytes. Files exceeding this limit trigger an Alert and are rejected.' 
      },
    ],
    usageCode: `import React from 'react';
import { View, Alert } from 'react-native';
import UploadField from '@atom-design-mog/upload-field';

// Basic usage with default 50MB limit
export function BasicUpload() {
  const handleFileSelected = (file) => {
    console.log('Selected file:', file);
    // file = { uri, name, size, type }
    
    // Upload to server
    uploadToServer(file);
  };

  return <UploadField onFileSelected={handleFileSelected} />;
}

// Custom file size limit (10MB)
<UploadField
  onFileSelected={(file) => console.log('File:', file)}
  maxSizeMB={10}
/>

// With server upload
<UploadField
  onFileSelected={async (file) => {
    const formData = new FormData();
    formData.append('file', {
      uri: file.uri,
      name: file.name,
      type: file.type,
    });
    
    await fetch('https://api.example.com/upload', {
      method: 'POST',
      body: formData,
    });
  }}
  maxSizeMB={25}
/>

// For document uploads (larger limit)
<UploadField
  onFileSelected={(file) => {
    Alert.alert('Document Selected', file.name);
  }}
  maxSizeMB={100}
/>`,
    features: [
      'Image library picker via react-native-image-picker',
      'Automatic camera fallback on library error',
      'File size validation with configurable limit',
      'Upload progress indicator with ProgressBar',
      'File info display (name, size, status)',
      'Remove file button (✕)',
      'Simulated upload progress animation (20% increments)',
      'Mixed media type support (images and videos)',
      'File metadata extraction (uri, name, size, type)',
      'Alert feedback for size limit exceeded',
    ],
    dosAndDonts: {
      dos: [
        'Configure appropriate maxSizeMB for your use case',
        'Handle the onFileSelected callback for server uploads',
        'Install peer dependencies (react-native-image-picker, react-native-progress)',
        'Add required permissions for camera and photo library',
        'Use FormData for multipart/form-data uploads',
      ],
      donts: [
        'Don\'t set maxSizeMB too high for mobile networks',
        'Avoid blocking UI during actual server uploads',
        'Don\'t forget to handle upload errors gracefully',
        'Avoid using without proper iOS/Android permissions setup',
      ],
    },
    accessibilityNotes: [
      'Upload button is TouchableOpacity for touch feedback',
      'File info displays name, progress, and status clearly',
      'Remove button provides clear visual affordance',
      'Consider adding accessibilityLabel to upload button',
      'Progress bar provides visual upload status',
    ],
  },

  login: {
    name: 'Login',
    package: '@atom-design-mog/login',
    version: '1.0.0',
    description: 'A Microsoft SSO login screen component for React Native with animated loading state, customizable logo, and background image support. Features a branded login button with animated dot loader, workspace sign-in messaging, and "Request Access" link for unauthenticated users.',
    npmUrl: 'https://www.npmjs.com/package/@atom-design-mog/login',
    snackId: '@avi-moglix/login-component',
    status: 'stable',
    hasTypeScript: false,
    propsIncomplete: false,
    variants: [],
    propsData: [
      { 
        name: 'onLogin', 
        type: '() => void', 
        default: '—', 
        required: true, 
        description: 'Callback triggered when "Login Via Microsoft Account" button is pressed. Use this to initiate your Microsoft SSO authentication flow.' 
      },
      { 
        name: 'isLoading', 
        type: 'boolean', 
        default: 'false', 
        required: false, 
        description: 'When true, displays an animated dot loader on the button and disables press interactions. Button opacity reduces to 0.7.' 
      },
      { 
        name: 'logoSource', 
        type: 'ImageSourcePropType', 
        default: '—', 
        required: false, 
        description: 'Image source for the company logo displayed above the login button. Supports require() or { uri: string }. Rendered at 30% width with 60px height.' 
      },
      { 
        name: 'backgroundSource', 
        type: 'ImageSourcePropType', 
        default: '—', 
        required: true, 
        description: 'Image source for the full-screen background via ImageBackground. Supports require() or { uri: string }.' 
      },
    ],
    usageCode: `import React, { useState } from 'react';
import { Alert } from 'react-native';
import Login from '@atom-design-mog/login';

// Basic usage with Microsoft SSO
export function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Trigger Microsoft authentication
      await microsoftAuth.signIn();
      // Navigate to home on success
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Login
      onLogin={handleLogin}
      isLoading={isLoading}
      logoSource={require('./assets/company-logo.png')}
      backgroundSource={require('./assets/login-bg.jpg')}
    />
  );
}

// With remote images
<Login
  onLogin={handleLogin}
  isLoading={isLoading}
  logoSource={{ uri: 'https://example.com/logo.png' }}
  backgroundSource={{ uri: 'https://example.com/background.jpg' }}
/>

// Without logo (background only)
<Login
  onLogin={handleLogin}
  isLoading={isLoading}
  backgroundSource={require('./assets/login-bg.jpg')}
/>

// Integration with @azure/msal-react-native
import { useMsal } from '@azure/msal-react-native';

function MicrosoftLoginScreen() {
  const { instance } = useMsal();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await instance.loginPopup();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Login
      onLogin={handleLogin}
      isLoading={isLoading}
      logoSource={require('./assets/moglix-logo.png')}
      backgroundSource={require('./assets/office-bg.jpg')}
    />
  );
}`,
    features: [
      'Microsoft SSO login button with Windows icon',
      'Animated 4-dot loader during loading state',
      'ImageBackground for full-screen branded experience',
      'Optional company logo with auto-sizing',
      'Card-style login container (max 450px width)',
      'Workspace sign-in explanation text',
      '"Request Access" link for unauthenticated users',
      'Button disabled state during loading',
      'Animated opacity, scale, and rotation on loader dots',
      'Clean white card with border on any background',
    ],
    dosAndDonts: {
      dos: [
        'Provide a high-quality background image',
        'Use transparent PNG for logo with proper aspect ratio',
        'Set isLoading=true during authentication flow',
        'Handle onLogin errors with user feedback',
        'Use with Microsoft/Azure AD authentication libraries',
      ],
      donts: [
        'Don\'t forget to set isLoading=false after auth completes',
        'Avoid low-resolution background images',
        'Don\'t use without a backgroundSource (required)',
        'Avoid blocking the UI without showing loading state',
      ],
    },
    accessibilityNotes: [
      'Login button is TouchableOpacity with disabled state',
      'Button text clearly indicates Microsoft login action',
      'Loading state visually indicated with animation',
      '"Request Access" link is touchable Text component',
      'Consider adding accessibilityLabel to button for screen readers',
    ],
  },
};

// Web Components Data (Coming Soon - placeholder structure)
export const webComponentsData = {
  buttons: {
    name: 'Buttons',
    package: '@atom-design-web/buttons',
    status: 'coming-soon',
  },
  input: {
    name: 'Input',
    package: '@atom-design-web/input',
    status: 'coming-soon',
  },
  modal: {
    name: 'Modal',
    package: '@atom-design-web/modal',
    status: 'coming-soon',
  },
  table: {
    name: 'Table',
    package: '@atom-design-web/table',
    status: 'coming-soon',
  },
  tabs: {
    name: 'Tabs',
    package: '@atom-design-web/tabs',
    status: 'coming-soon',
  },
  dropdown: {
    name: 'Dropdown',
    package: '@atom-design-web/dropdown',
    status: 'coming-soon',
  },
  cards: {
    name: 'Cards',
    package: '@atom-design-web/cards',
    status: 'coming-soon',
  },
  forms: {
    name: 'Forms',
    package: '@atom-design-web/forms',
    status: 'coming-soon',
  },
};

// Helper to get sidebar items based on platform
export const getSidebarItems = (platform = 'app') => {
  if (platform === 'web') {
    return Object.entries(webComponentsData).map(([key, data]) => ({
      name: data.name,
      path: `/web/components/${key}`,
      package: data.package,
      status: data.status,
    }));
  }
  
  return Object.entries(componentsData).map(([key, data]) => ({
    name: data.name,
    path: `/app/components/${key}`,
    package: data.package,
  }));
};

// Helper to get component by slug
export const getComponentBySlug = (slug, platform = 'app') => {
  if (platform === 'web') {
    return webComponentsData[slug] || null;
  }
  return componentsData[slug] || null;
};
