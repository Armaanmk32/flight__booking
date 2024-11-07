import SideNave from "./SideNave";
import { Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';

function Statistics() {
  const pieData = {
    labels: ['Boeing', 'Airbus'],
    datasets: [
      {
        label: 'Flight Share',
        data: [60, 40],
        backgroundColor: ['#FFC107', '#00BFFF'],
        hoverOffset: 4,
      },
    ],
  };

  // Data for the line chart (Flight Schedule)
  const lineData = {
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Flights',
        data: [1500, 2000, 2500, 3000, 3500, 3200],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
      <SideNave />
      <div className="ml-0 lg:ml-[25%] pt-10 px-4">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pie Chart (Flight Share) */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-4">Flight Share</h4>
              <Pie data={pieData} />
            </div>

            {/* Statistics */}
            <div className="bg-white hover:bg-black hover:text-white p-6 rounded-lg shadow flex justify-center items-center">
              <div>

              <h4 className="text-xl font-bold sm:ml-0 text-center mb-4">Statistics</h4>
              <div className="flex justify-between w-full">
                <div className="w-16 h-16 md:w-24 md:h-24 sm:ml-0 ml-2 bg-blue-500 rounded-full"></div>
                <div className="w-16 h-16 md:w-24 md:h-24 bg-yellow-500 rounded-full"></div>
              </div>
              </div>
            </div>
          </div>

            {/* Flight Schedule */}
            <div className="bg-white p-6 rounded-lg shadow col-span-1 md:col-span-2">
              <h4 className="text-lg font-bold mb-4">Flight Schedule</h4>
              <Line data={lineData} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
