

const Navbar = () => {
  
        return (
            <div className="py-6">
              <div className="container flex justify-between items-center">
                {/* logo section */}
                <div>
                  <p className="text-lg font-semibold">
                    FOOD <span className="text-red-600">EAT</span>
                  </p>
                </div>
                 {/* menu section */}
                 <div>
                  <ul className="flex gap-8">
                    <li className="hover:border border-b-2 border-primary uppercase">HOME</li>
                    <li className="hover:border border-b-2 border-primary uppercase">MENU</li>
                    <li className="hover:border border-b-2 border-primary uppercase">ABOUT</li>
                  </ul>
                 </div>
              </div>
            </div>
          )
    
       
        
    
  
}

export default Navbar