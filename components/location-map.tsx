export function LocationMap() {
  return (
    <section id="location" className="py-12 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        
        <div className="grid gap-6 lg:grid-cols-3 items-center rounded-xl border border-border overflow-hidden bg-muted/10">
          
          
          <div className="p-8 lg:col-span-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
              Office Location
            </span>
            <h3 className="text-2xl font-bold text-foreground mt-4">D TAX AND LAW</h3>
            
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Kunjadas Road, Saktigarh Rd,<br /> 
              Bangaon, West Bengal 743235
            </p>
            
            <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Open 24 Hours
              </div>
              <div>Available for structured emergency advisory.</div>
            </div>
          </div>

          
          <div className="h-[350px] lg:h-[400px] lg:col-span-2 w-full relative border-t lg:border-t-0 lg:border-l border-border overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=D%20TAX%20AND%20LAW,%20Kunjadas%20Road,%20Saktigarh%20Rd,%20Bangaon,%20West%20Bengal%20743235&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}