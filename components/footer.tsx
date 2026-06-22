export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="text-sm font-semibold text-foreground">
            VANGUARD <span className="text-muted-foreground font-light">| Partners</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} Vanguard Advisory Group LLP. All rights reserved.
          </p>
        </div>
        <div className="text-xs text-muted-foreground max-w-md sm:text-right leading-relaxed">
          Attorney Advertising. Prior results do not guarantee a similar outcome. Services offered are subject to conflict checks and official engagement configurations.
        </div>
      </div>
    </footer>
  );
}