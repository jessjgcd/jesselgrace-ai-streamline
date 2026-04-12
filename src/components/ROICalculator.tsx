import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export const ROICalculator = () => {
  const [monthlyTasks, setMonthlyTasks] = useState([40]);
  const [teamSize, setTeamSize] = useState([3]);
  const [hourlyRate, setHourlyRate] = useState([50]);

  const hoursAutomated = monthlyTasks[0] * 0.6;
  const monthlySavings = hoursAutomated * hourlyRate[0] * teamSize[0];
  const yearlySavings = monthlySavings * 12;
  const productivityBoost = Math.round((hoursAutomated / (monthlyTasks[0] * teamSize[0])) * 100);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
            <Calculator className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              AI ROI Calculator
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            See Your Potential
            <span className="text-gradient"> Savings</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how my funnel and automation setups can supercharge your
            efficiency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sliders */}
            <div className="p-8 rounded-2xl bg-card border border-border space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium text-foreground">
                    Monthly Repetitive Tasks (hours)
                  </label>
                  <span className="text-lg font-bold text-primary">
                    {monthlyTasks[0]}h
                  </span>
                </div>
                <Slider
                  value={monthlyTasks}
                  onValueChange={setMonthlyTasks}
                  max={200}
                  min={10}
                  step={5}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium text-foreground">
                    Team Size
                  </label>
                  <span className="text-lg font-bold text-primary">
                    {teamSize[0]} people
                  </span>
                </div>
                <Slider
                  value={teamSize}
                  onValueChange={setTeamSize}
                  max={20}
                  min={1}
                  step={1}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium text-foreground">
                    Average Hourly Rate ($)
                  </label>
                  <span className="text-lg font-bold text-primary">
                    ${hourlyRate[0]}
                  </span>
                </div>
                <Slider
                  value={hourlyRate}
                  onValueChange={setHourlyRate}
                  max={200}
                  min={15}
                  step={5}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                />
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-pastel-pink border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                    <Clock className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Hours Saved Monthly</p>
                    <p className="text-2xl font-bold text-foreground">
                      {hoursAutomated.toFixed(0)} hours
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-pastel-blue border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Savings</p>
                    <p className="text-2xl font-bold text-foreground">
                      ${monthlySavings.toLocaleString()}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-2xl bg-pastel-lavender border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Yearly Potential</p>
                    <p className="text-2xl font-bold text-foreground">
                      ${yearlySavings.toLocaleString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default ROICalculator;
