import React, { useState } from 'react';
import type { EstimateFormData } from '../../types/concrete.ts';

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
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-concrete-sand text-stone-charcoal shadow-2xl p-6 sm:p-10 border border-stone-800 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-stone-charcoal/10 hover:bg-stone-charcoal hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-stone-charcoal">
              Estimate Request Received
            </h3>
            <p className="font-sans text-sm text-secondary max-w-md mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. A Morning Star estimating specialist will review your site plans and contact you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-4 bg-primary" />
              <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                Priority Dispatch
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-stone-charcoal font-bold mb-2">
              Request Project Estimate
            </h3>
            <p className="font-sans text-xs text-secondary mb-6">
              Southern California C-8 Concrete Contractor • Lic. #984210 • 25+ Years Experience
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-1.5" htmlFor="modal-name">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white px-3.5 py-2.5 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-1.5" htmlFor="modal-phone">
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    required
                    type="tel"
                    value={formData.phoneNum}
                    onChange={(e) => setFormData({ ...formData, phoneNum: e.target.value })}
                    placeholder="(951) 000-0000"
                    className="w-full bg-white px-3.5 py-2.5 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-1.5" htmlFor="modal-email">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    required
                    type="email"
                    value={formData.emailAddr}
                    onChange={(e) => setFormData({ ...formData, emailAddr: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-white px-3.5 py-2.5 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-1.5" htmlFor="modal-type">
                    Project Classification *
                  </label>
                  <select
                    id="modal-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                  >
                    <option value="residential-driveway">Residential Driveway / Sidewalk (Broom Finish)</option>
                    <option value="decorative-stamped">Decorative Stamped Concrete (Color &amp; Seal)</option>
                    <option value="patio-pool">Patio Slab or Pool Deck</option>
                    <option value="foundation-structural">Commercial Foundation Slab / Approach Slab</option>
                    <option value="civil-curb">Curb &amp; Gutter / Civil Infrastructure</option>
                    <option value="retaining-wall">Engineered Retaining Wall</option>
                    <option value="patch-repair">Concrete Patch &amp; Repair</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-1.5" htmlFor="modal-loc">
                  Site Location (City or Zip Code) *
                </label>
                <input
                  id="modal-loc"
                  required
                  type="text"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  placeholder="e.g. Menifee, Murrieta, Temecula, Riverside"
                  className="w-full bg-white px-3.5 py-2.5 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-1.5" htmlFor="modal-details">
                  Project Dimensions or Specs
                </label>
                <textarea
                  id="modal-details"
                  rows={3}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Approximate sq ft, required thickness (4'', 6'', 8''), finish type, rebar requirements..."
                  className="w-full bg-white px-3.5 py-2.5 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                />
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <input
                  id="modal-sync"
                  type="checkbox"
                  checked={formData.syncFinancing}
                  onChange={(e) => setFormData({ ...formData, syncFinancing: e.target.checked })}
                  className="w-4 h-4 text-[#ea580c] accent-[#ea580c]"
                />
                <label htmlFor="modal-sync" className="font-sans text-xs text-stone-800 font-medium cursor-pointer">
                  I am interested in flexible Synchrony Bank financing options.
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase tracking-wider font-black transition-all shadow-xl cursor-pointer hover:scale-[1.01]"
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

