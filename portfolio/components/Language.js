import React from 'react';
import { GrLanguage } from "react-icons/gr";

const Language = () => {
    return (
        <div class="navbar-language">
          <a class="text-custom1 flex items-center">
            <GrLanguage />
            <span class="ml-2">Language</span>
          </a>
        </div>
    );
}

export default Language;