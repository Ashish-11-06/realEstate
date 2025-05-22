const theme = {
    token: {
      // Primary colors - Using deep blue (trust) with gold accents (luxury)
      colorPrimary: '#1a4b8c',       // Deep blue - primary brand color
      colorInfo: '#1a4b8c',          // Info color (same as primary)
      colorSuccess: '#3a7d44',       // Natural green - for success states
      colorWarning: '#e4a700',       // Gold/yellow - for warnings
      colorError: '#c33149',         // Coral red - for errors
      
      // Background and surface colors
      colorBgContainer: '#ffffff',   // White background for content
      colorBgElevated: '#f8f9fa',    // Light gray for elevated components
      colorBgLayout: '#f0f2f5',      // Very light gray for layout
      
      // Text colors
      colorText: '#2d3748',          // Dark gray-blue for primary text
      colorTextSecondary: '#4a5568', // Medium gray for secondary text
      colorTextTertiary: '#718096',  // Lighter gray for tertiary text
      
      // Border colors
      colorBorder: '#e2e8f0',        // Light gray for borders
      colorBorderSecondary: '#cbd5e0', // Slightly darker border
      
      // Additional real estate specific tokens
      colorHighlight: '#e4a700',      // Gold accent color
      colorLink: '#1a4b8c',          // Link color matching primary
      
      // Keeping structural values
      borderRadius: 6,
      fontSize: 14,
      controlHeight: 36,
    },
    components: {
      Button: {
        colorPrimary: '#1a4b8c',
        colorPrimaryHover: '#143a6f',
        colorPrimaryActive: '#0d2a52',
        algorithm: true,
      },
      Input: {
        colorPrimary: '#1a4b8c',
        colorBorder: '#cbd5e0',
        hoverBorderColor: '#1a4b8c',
        borderRadius: 6,
      },
      Card: {
        colorBgContainer: '#ffffff',
        borderRadius: 8,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      },
      Table: {
        headerBg: '#f8f9fa',
        headerColor: '#2d3748',
        rowHoverBg: '#f0f7ff',
      },
      Menu: {
        itemHoverBg: '#f0f7ff',
        itemSelectedBg: '#e6f0ff',
        itemSelectedColor: '#1a4b8c',
      }
    }
  };
  
  export default theme;