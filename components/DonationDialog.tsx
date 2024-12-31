"use client";

import React from 'react';
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BankDetail {
  label: string;
  value: string;
  copyable?: boolean;
}

const bankDetails: BankDetail[] = [
  {
    label: "Account Name",
    value: "Ganga Shanmuga Social and Educational Trust",
    copyable: true
  },
  {
    label: "Account Number",
    value: "915020047965042",
    copyable: true
  },
  {
    label: "IFSC Code",
    value: "UTIB0002760",
    copyable: true
  },
  {
    label: "MICR Code",
    value: "626211402",
    copyable: true
  },
  {
    label: "Bank Name",
    value: "Axis Bank",
  },
  {
    label: "Account Type",
    value: "Current Account"
  }
];

export function DonationDialog() {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        
        <Button
                className="bg-secondary text-white hover:bg-secondary/90 transition-transform transform hover:scale-105"
                >
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center pb-4">
            Support Our Cause
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bank Details Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Bank Transfer Details</h3>
            <div className="space-y-3">
              {bankDetails.map((detail) => (
                <div key={detail.label} className="relative">
                  <div className="text-sm text-gray-500">{detail.label}</div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-medium text-sm">{detail.value}</div>
                    {detail.copyable && (
                      <button
                        onClick={() => handleCopy(detail.value, detail.label)}
                        className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedField === detail.label ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UPI Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">UPI Payment</h3>
            <Card className="border-dashed">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="relative w-48 h-48 mb-4">
                  <Image
                    src="/qr-code.png"
                    alt="UPI QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-500">UPI ID</p>
                  <div className="flex items-center justify-center gap-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      trust@upi
                    </code>
                    <button
                      onClick={() => handleCopy("trust@upi", "UPI ID")}
                      className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                      title="Copy UPI ID"
                    >
                      {copiedField === "UPI ID" ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Your donations are tax-deductible under Section 80G of the Income Tax Act.
            A receipt will be sent to your email after the donation is processed.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Usage in Navbar:
/*
import { DonationDialog } from "@/components/donation-dialog";

// Replace the Button in Navbar with:

*/