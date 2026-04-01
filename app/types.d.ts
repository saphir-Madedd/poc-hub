type BrandTheme = {
  id: string;
  displayName: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  foregroundColor: string;
};

type PageProps = {
  theme: BrandTheme;
};
