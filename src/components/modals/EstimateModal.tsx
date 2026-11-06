import React, { useState } from 'react';
import type { EstimateFormData } from '../../types/concrete.ts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select.tsx';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectType?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  initialProjectType = 'residential-driveway',
}) => {
  const [formData, setFormData] = useState<EstimateFormData>({
    fullName: '',
    phoneNum: '',
    emailAddr: '',
    projectType: initialProjectType,
    projectLocation: '',
    projectDetails: '',
    syncFinancing: false,
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      {/* Modal Dialog: Solid Dark Architectural Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0c1017] text-white shadow-2xl rounded-2xl p-7 sm:p-10 border-2 border-white/20 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#ea580c] text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
              <span className="material-symbols-outlined text-3xl font-bold">check</span>
            </div>
            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white">
              Estimate Request Received
            </h3>
            <p className="font-sans text-sm text-zinc-300 max-w-md mx-auto font-medium">
              Thank you, <strong>{formData.fullName}</strong>. A Morning Star estimating specialist will review your site plans and contact you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-4 bg-[#ea580c] rounded-sm" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#ea580c] font-black">
                Priority Dispatch
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white font-black mb-2">
              Request Project Estimate
            </h3>
            <p className="font-sans text-xs text-zinc-300 mb-6 font-medium">
              Southern California C-8 Concrete Contractor • Lic. #984210 • 25+ Years Experience
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white font-black mb-1.5 drop-shadow-sm" htmlFor="modal-name">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border-2 border-stone-300 font-bold rounded-xl placeholder-stone-500"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white font-black mb-1.5 drop-shadow-sm" htmlFor="modal-phone">
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    required
                    type="tel"
                    value={formData.phoneNum}
                    onChange={(e) => setFormData({ ...formData, phoneNum: e.target.value })}
                    placeholder="(951) 000-0000"
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border-2 border-stone-300 font-bold rounded-xl placeholder-stone-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white font-black mb-1.5 drop-shadow-sm" htmlFor="modal-email">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    required
                    type="email"
                    value={formData.emailAddr}
                    onChange={(e) => setFormData({ ...formData, emailAddr: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border-2 border-stone-300 font-bold rounded-xl placeholder-stone-500"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white font-black mb-1.5 drop-shadow-sm" htmlFor="modal-type">
                    Project Classification *
                  </label>
                  {/* Shadcn UI Dropdown Component */}
                  <Select
                    value={formData.projectType}
                    onValueChange={(val) => setFormData({ ...formData, projectType: val })}
                  >
                    <SelectTrigger id="modal-type" className="w-full">
                      <SelectValue placeholder="Select project classification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-driveway">Residential Driveway / Sidewalk (Broom Finish)</SelectItem>
                      <SelectItem value="decorative-stamped">Decorative Stamped Patio / Pool Deck (Color &amp; Seal)</SelectItem>
                      <SelectItem value="foundation-structural">Commercial Foundation Slab / Approach Slab</SelectItem>
                      <SelectItem value="civil-curb">Curb &amp; Gutter / Civil Infrastructure</SelectItem>
                      <SelectItem value="retaining-wall">Engineered Cantilever Retaining Wall</SelectItem>
                      <SelectItem value="patch-repair">Structural Concrete Patch &amp; Repair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-white font-black mb-1.5 drop-shadow-sm" htmlFor="modal-loc">
                  Site Location (City or Zip Code) *
                </label>
                <input
                  id="modal-loc"
                  required
                  type="text"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  placeholder="e.g. Menifee, Murrieta, Temecula, Riverside"
                  className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border-2 border-stone-300 font-bold rounded-xl placeholder-stone-500"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-white font-black mb-1.5 drop-shadow-sm" htmlFor="modal-details">
                  Project Dimensions or Specs
                </label>
                <textarea
                  id="modal-details"
                  rows={3}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Approximate sq ft, required thickness (4'', 6'', 8''), finish type, rebar requirements..."
                  className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border-2 border-stone-300 font-medium rounded-xl placeholder-stone-500"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <input
                  id="modal-sync"
                  type="checkbox"
                  checked={formData.syncFinancing}
                  onChange={(e) => setFormData({ ...formData, syncFinancing: e.target.checked })}
                  className="w-5 h-5 text-[#ea580c] accent-[#ea580c] cursor-pointer rounded"
                />
                <label htmlFor="modal-sync" className="font-sans text-xs sm:text-sm text-white font-bold cursor-pointer drop-shadow-sm">
                  I am interested in flexible Synchrony Bank financing options.
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase tracking-wider font-black transition-all shadow-2xl cursor-pointer hover:scale-[1.01] rounded-xl"
              >
                Submit Estimate Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstimateModal;

