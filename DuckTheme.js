define("ace/theme/tomorrow_night", ["require", "exports", "module", "ace/lib/dom"], function(e, t, n) {
    t.isDark = !0;
    t.cssClass = "ace-tomorrow_night-theme";
    t.cssText = `
      .ace-tomorrow_night-theme .ace_gutter {
        background: transparent;
        color: #E2DE16;  
      }
      
      .ace-tomorrow_night-theme .ace_print-margin {
        width: 1px;
        background: transparent;
      }
      
      .ace-tomorrow_night-theme {
        background: url('https://cdn.discordapp.com/attachments/1214213359033917461/1242193854594289674/Screen_Recording_2024-05-20_at_3.14.38_PM.mov?ex=664cf2ad&is=664ba12d&hm=36bfa7f589c1c4ef2df75c4dc4e51d0327794271e8c914c47123166e63b62fed&') no-repeat center center fixed;
        background-size: cover;
        color: #E2DE16;
        text-shadow: #000000;
        border: #edebeb;
      }
      
      .ace-tomorrow_night-theme .ace_marker-layer {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_selection {
        background-color: #14791B;
      }
      
      .ace-tomorrow_night-theme.ace_multiselect .ace_selection.ace_start {
        box-shadow: none;
      }
      
      .ace-tomorrow_night-theme .ace_step {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_bracket {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_bracket-start {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_bracket-unmatched {
        margin: -1px 0 0 -1px;
        border: none;
      }
      
      .ace-tomorrow_night-theme .ace_active-line {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_gutter-active-line {
        background-color: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_selected-word {
        border: none;
        background-color: #14791B;
      }
      
      .ace-tomorrow_night-theme .ace_invisible {
        color: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_keyword,
      .ace-tomorrow_night-theme .ace_meta,
      .ace-tomorrow_night-theme .ace_storage,
      .ace-tomorrow_night-theme .ace_storage.ace_type {
        color: #A3A3A3;
      }
      
      .ace-tomorrow_night-theme .ace_keyword.ace_operator {
        color: #941D1D;
      }
      
      .ace-tomorrow_night-theme .ace_constant.ace_character,
      .ace-tomorrow_night-theme .ace_constant.ace_language,
      .ace-tomorrow_night-theme .ace_constant.ace_numeric,
      .ace-tomorrow_night-theme .ace_keyword.ace_other.ace_unit,
      .ace-tomorrow_night-theme .ace_support.ace_constant,
      .ace-tomorrow_night-theme .ace_variable.ace_parameter {
        color: #E2DE16;
      }
      
      .ace-tomorrow_night-theme .ace_constant.ace_other {
        color: #E2DE16;
      }
      
      .ace-tomorrow_night-theme .ace_invalid {
        color: #E2DE16;
        background-color: transparent;
      }
      .ace-tomorrow_night-theme .ace_invalid.ace_deprecated {
        color: #E2DE16;
        background-color: transparent;
      }
      
      .ace-tomorrow_night-theme {
        
      }
    `;
    
    var r = e("../lib/dom");
    r.importCssString(t.cssText, t.cssClass);
  });
  
