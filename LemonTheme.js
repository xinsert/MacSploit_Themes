define("ace/theme/tomorrow_night", ["require", "exports", "module", "ace/lib/dom"], function(e, t, n) {
    t.isDark = !0;
    t.cssClass = "ace-tomorrow_night-theme";
    t.cssText = `
      .ace-tomorrow_night-theme .ace_gutter {
        background: transparent;
        color: #DAD60D;  
      }
      
      .ace-tomorrow_night-theme .ace_print-margin {
        width: 1px;
        background: transparent;
      }
      
      .ace-tomorrow_night-theme {
        background: url('https://cdn.discordapp.com/attachments/1214213359033917461/1242831480162619515/lemons-tree.png?ex=664f4483&is=664df303&hm=65faa96a818ccbb89b5425aac72cf3313ab70354c4f6e15c31a16bd4b2a5b154&') no-repeat center center fixed;
        background-size: cover;
        color: #DAD60D;
        text-shadow: #F4FF00;
        border: #edebeb;
      }
      
      .ace-tomorrow_night-theme .ace_marker-layer {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_selection {
        background-color: #F8FF54;
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
        background-color: #F8FF54;
      }
      
      .ace-tomorrow_night-theme .ace_invisible {
        color: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_keyword,
      .ace-tomorrow_night-theme .ace_meta,
      .ace-tomorrow_night-theme .ace_storage,
      .ace-tomorrow_night-theme .ace_storage.ace_type {
        color: #89520D;
      }
      
      .ace-tomorrow_night-theme .ace_keyword.ace_operator {
        color: #89520D;
      }
      
      .ace-tomorrow_night-theme .ace_constant.ace_character,
      .ace-tomorrow_night-theme .ace_constant.ace_language,
      .ace-tomorrow_night-theme .ace_constant.ace_numeric,
      .ace-tomorrow_night-theme .ace_keyword.ace_other.ace_unit,
      .ace-tomorrow_night-theme .ace_support.ace_constant,
      .ace-tomorrow_night-theme .ace_variable.ace_parameter {
        color: #53CF05;
      }
      
      .ace-tomorrow_night-theme .ace_constant.ace_other {
        color: #DAD60D;
      }
      
      .ace-tomorrow_night-theme .ace_invalid {
        color: #DAD60D;
        background-color: transparent;
      }
      .ace-tomorrow_night-theme .ace_invalid.ace_deprecated {
        color: #DAD60D;
        background-color: transparent;
      }
      
      .ace-tomorrow_night-theme {
        
      }
    `;
    
    var r = e("../lib/dom");
    r.importCssString(t.cssText, t.cssClass);
  });
  
