import { revenueColumns, revenueRows } from "@/lib/home-data";

export function RevenueTable() {
  return (
    <>
      <div className="motion-table lg:hidden">
        <div className="rounded-[16px] border border-white/10 bg-black/10 p-5">
          <div className="grid grid-cols-[minmax(0,1fr)_72px_72px_72px] items-center gap-x-3 border-b border-[#616161] pb-4">
            <p className="font-display text-[15px] font-medium uppercase tracking-[-0.02em] text-white">
              Metric Type
            </p>
            {revenueColumns.map((column) => (
              <p
                key={column}
                className="text-center font-display text-[12px] font-bold uppercase tracking-[0.04em] text-white"
              >
                {column}
              </p>
            ))}
          </div>

          {revenueRows.map((row) => (
            <div
              key={row.metric}
              className="grid grid-cols-[minmax(0,1fr)_72px_72px_72px] items-center gap-x-3 pt-5"
            >
              <p className="pr-2 font-display text-[14px] leading-[1.35] tracking-[-0.02em] text-[#8A8A8A]">
                {row.metric}
              </p>
              {row.values.map((value) => (
                <p
                  key={`${row.metric}-${value}`}
                  className="text-center font-display text-[14px] font-medium tracking-[-0.02em] text-white"
                >
                  {value}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="motion-table hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#616161]">
              <th className="px-px py-8 align-middle font-display text-[20px] font-normal uppercase tracking-[-0.02em] text-white sm:text-[20px]">
                Metric Type
              </th>
              {revenueColumns.map((column, index) => {
                const color = index === 0 ? "text-[#E5E2E1]" : "text-white";
                return (
                  <th
                    key={`${column}-${index}`}
                    className={`px-2 py-10 text-center align-middle font-display text-[16px] font-bold uppercase leading-tight tracking-[0.06em] sm:text-[20px] ${color}`}
                  >
                    {column.split(" / ").map((part, i) => (
                      <span key={i} className="block">
                        {part}
                        {i === 0 ? " " : ""}
                      </span>
                    ))}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {revenueRows.map((row, rowIndex) => (
              <tr
                key={row.metric}
                className={rowIndex === 0 ? "" : "border-t border-[rgba(77,70,53,0.1)]"}
              >
                <td className="px-px py-8 align-middle font-display text-[15px] font-normal tracking-[-0.02em] text-[#616161] sm:text-[20px]">
                  {row.metric}
                </td>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.metric}-${index}`}
                    className="px-2 py-9 text-center align-middle font-display text-[15px] font-normal tracking-[-0.02em] text-white sm:text-[16px]"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
