#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fix malformed template literal delimiters in studyLibrary.js
Replaces \\\\\\ with backticks (`)
"""

import sys

def fix_template_literals(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    #  Replace six backslashes (which appear as \\\\\\  in the source) with a single backtick
    # In Python strings: '\\\\\\\\\\\\' represents 6 literal backslashes
    fixed_content = content.replace('\\\\\\\\\\\\', '`')
    
    # Also fix the escaped factorial symbols that were incorrectly added
    fixed_content = fixed_content.replace('\\\\!', '!')
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print(f"Fixed template literals in {input_file}")
    print(f"Output written to {output_file}")

if __name__ == '__main__':
    input_path = r'C:\Users\viniciusk.goncalves\Documents\web3\estuda-concurso-ai\src\data\studyLibrary.js'
    output_path = input_path  # Overwrite the same file
    
    fix_template_literals(input_path, output_path)
    print("Done!")
