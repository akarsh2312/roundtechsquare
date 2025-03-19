import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#EDF7FA] pt-16 pb-8">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">KRYSTELLE ROMY GROUP</h2>
          
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">KRYSTELLE ROMY</h3>
              <p className="text-sm">DRE#01977487</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">EMAIL</h3>
              <p className="text-sm">krystelle@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">PHONE</h3>
              <p className="text-sm">(123) 456 7890</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">ADDRESS</h3>
              <p className="text-sm">
                1123 HERMOSA AVENUE, SUITE #210,<br />
                HERMOSA BEACH, CA 92804
              </p>
            </div>
          </div>

          <p className="text-sm mb-12">
            Krystelle Romy is a real estate agent licensed by the state of California affiliated with compass. 
            Krystelle Romy is a real estate broker licensed by the state of California and abides by equal housing 
            opportunity laws. All material presented herein is intended for informational purposes only.
          </p>
        </div>

        <div className="border-t border-black/30 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">© 2023, KRYSTELLE.</span>
            <span className="text-sm font-semibold">POWERED BY ROUNDTECHSQUARE</span>
            <div className="flex gap-4">
              <a href="#" className="text-sm font-semibold">TERMS OF USE</a>
              <div className="h-4 w-px bg-black mx-2"></div>
              <a href="#" className="text-sm font-semibold">PRIVACY POLICY</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;