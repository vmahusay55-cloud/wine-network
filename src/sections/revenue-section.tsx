import { RevenueTable } from "@/components/revenue-table";

export function RevenueSection() {
  return (
    <section id="lost-revenue" className="relative isolate overflow-hidden">
      {/* Figma fill_1SQLOZ — Linear gradient at 100% opacity (the dominant fill) */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(-34deg, rgba(21, 21, 21, 1) 64%, rgba(80, 80, 80, 1) 100%)",
        }}
        aria-hidden
      />
      {/* Figma fill_1SQLOZ — Wine pattern texture at 1.5% opacity (just a hint of grain on top) */}
      <div
        className="absolute inset-0 -z-10 bg-[url('/images/revenue/background.webp')] bg-cover bg-center bg-no-repeat opacity-[0.015]"
        aria-hidden
      />

      <div className="mx-auto flex max-w-[1442px] flex-col items-center gap-12 px-6 py-20 sm:px-12 lg:gap-12 lg:px-12 lg:py-[80px]">
        <div className="flex flex-col items-stretch text-center">
          <h2 className="font-display text-[36px] uppercase leading-[1.107] tracking-[0.107em] sm:text-[44px] lg:text-[56px]">
            <span className="font-light text-[#616161]">Your Lost</span>
            <br />
            <span className="font-bold text-white">Revenue</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md font-display text-[15px] font-normal leading-[1.4] tracking-[-0.01em] text-white sm:text-[20px]">
            Based on hospitality group moving 500 cases (6,000 bottles) per year in Singapore.
          </p>
        </div>

        <div className="w-full max-w-[1024px]">
          <RevenueTable />
        </div>
      </div>
    </section>
  );
}
