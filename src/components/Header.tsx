export function Header() {
  return (
    <header className="w-full px-4 py-4 bg-white border-b border-border">
      <div className="flex items-center justify-between">
        <div className="text-foreground">Home screen</div>
        <div className="text-center">
          <h1 className="tracking-tight">
            NYC Tenant Housing Rights
          </h1>
        </div>
        <div className="w-20"></div>{" "}
        {/* Spacer for center alignment */}
      </div>
    </header>
  );
}
